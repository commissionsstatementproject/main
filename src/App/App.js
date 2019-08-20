import React from "react";
import Home from "./Home/Home";
import Statement from "./Statement/Statement";

function App() {
  const [csvString, setCsvString] = React.useState("");
  const [signatureImageURL, setSignatureImageURL] = React.useState(null);
  const [salespersonName, setSalespersonName] = React.useState("");

  if (!csvString) {
    return (
      <Home
        salespersonName={salespersonName}
        handleSalespersonNameChange={event =>
          setSalespersonName(event.target.value)
        }
        handleSignatureImageURLChange={event =>
          setSignatureImageURL(URL.createObjectURL(event.target.files[0]))
        }
        setCsvString={setCsvString}
      />
    );
  } else {
    return (
      <Statement
        csvString={csvString}
        salespersonName={salespersonName}
        signatureImageURL={signatureImageURL}
      />
    );
  }
}

export default App;
