import React from "react";
import Home from "./Home/Home";
import Statement from "./Statement/Statement";

function App() {
  const [csvString, setCsvString] = React.useState("");
  const [salespersonName, setSalespersonName] = React.useState("");

  if (!csvString) {
    return (
      <Home
        salespersonName={salespersonName}
        handleSalespersonNameChange={event =>
          setSalespersonName(event.target.value)
        }
        setCsvString={setCsvString}
      />
    );
  } else {
    return (
      <Statement csvString={csvString} salespersonName={salespersonName} />
    );
  }
}

export default App;
