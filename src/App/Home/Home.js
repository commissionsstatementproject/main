import React from "react";
import { readUploadedFileAsText } from "../uploadHelper";
import {
  validateFile,
  validateAgainstEmptySalespersonName
} from "../homeValidationHelper";
import "./Home.css";

function Home(props) {
  const { setCsvString, salespersonName, handleSalespersonNameChange } = props;
  const [file, setFile] = React.useState(null);

  const handleSubmit = event => {
    event.preventDefault();

    validateFile(file)
      .then(() => validateAgainstEmptySalespersonName(salespersonName))
      .then(() => readUploadedFileAsText(file))
      .then(fileString => setCsvString(fileString))
      .catch(error => alert(error));
  };

  return (
    <div className="home-container">
      <form
        onSubmit={handleSubmit}
        data-testid="home"
        className="form-container"
      >
        <div className="form-heading open-sans">
          Commission Statement Generator
        </div>

        <div className="form-section">
          <label className="open-sans section-heading">
            <div className="section-heading">Salesperson's Name:</div>
            <input
              type="text"
              className="text-input text open-sans"
              placeholder="salesperson name"
              data-testid="salesPersonName"
              onChange={handleSalespersonNameChange}
              value={salespersonName}
            />
          </label>
        </div>

        <div className="form-section open-sans">
          <div>
            <span>CSV file:</span>
            <span className="file-input-container">
              <label className="file-input">
                Browse
                <input
                  type="file"
                  accept=".csv"
                  data-testid="fileSelect"
                  onChange={event => setFile(event.target.files[0])}
                  className="hide"
                />
              </label>
            </span>
          </div>
          <div className="small">
            Selected file: {!file ? "none" : file.name}
          </div>
        </div>

        <div className="submit-button-container open-sans">
          <input
            className="submit-button open-sans"
            type="submit"
            value="Generate Statement"
            data-testid="generateButton"
          />
        </div>

        <div className="extra-information open-sans">
          This is an internal app made by{" "}
          <a href="https://jigsaw.thoughtworks.net/consultants/23558">
            Rahul Rakshit
          </a>{" "}
          for ThoughtWorks UK to auto-generate commission statements for demand
          team members. For more information and the source code take a look at
          the{" "}
          <a href="https://github.com/commissionsstatementproject/main">
            GitHub repository
          </a>
          .
        </div>
      </form>
    </div>
  );
}

export default Home;
