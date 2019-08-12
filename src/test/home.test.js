import React from "react";
import { cleanup, render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { explicitWait } from "./testHelpers/testSugar";
import { toContainMatch } from "./testHelpers/customMatchers";

import App from "../App/App";
import { readUploadedFileAsText } from "../App/uploadHelper";

jest.mock("../App/uploadHelper", () => ({
  readUploadedFileAsText: jest.fn()
}));

import fs from "fs";
const sampleCsv = fs
  .readFileSync(`${process.cwd()}/src/test/testCsvs/sample.csv`)
  .toString();

let stderr = console.error;
import {
  setupActWarningFilter,
  teardownActWarningFilter
} from "./testHelpers/actWarningFilter";

describe("The homepage", () => {
  beforeEach(cleanup);
  beforeAll(() => {
    expect.extend({ toContainMatch });
    setupActWarningFilter(stderr);
  });
  afterAll(() => teardownActWarningFilter(stderr));

  it("renders the home component, which is a form", () => {
    const { getByTestId } = render(<App />);
    const homeComponent = getByTestId("home");
    const fileSelect = getByTestId("fileSelect");
    const salespersonNameInput = getByTestId("salesPersonName");
    const generateStatementButton = getByTestId("generateButton");

    expect(homeComponent).toBeInTheDocument();
    expect(homeComponent).toContainElement(fileSelect);
    expect(homeComponent).toContainElement(salespersonNameInput);
    expect(homeComponent).toContainElement(generateStatementButton);
  });

  it("has a csv file upload form field", () => {
    const { getByTestId } = render(<App />);
    const fileSelect = getByTestId("fileSelect");
    const testFile = new File([sampleCsv], "sample.csv", { type: "text/csv" });

    fireEvent.change(fileSelect, { target: { files: [testFile] } });

    expect(fileSelect.files[0].name).toEqual("sample.csv");
  });

  it("has a salesperson name form field", () => {
    const { getByTestId } = render(<App />);
    const personNameInput = getByTestId("salesPersonName");

    fireEvent.change(personNameInput, { target: { value: "John Doe" } });

    expect(personNameInput.value).toEqual("John Doe");
  });

  it("has a button that generates a statement", async () => {
    readUploadedFileAsText.mockResolvedValue(sampleCsv);
    const { getByTestId } = render(<App />);
    const testFile = new File([sampleCsv], "dummy.csv", { type: "text/csv" });
    const homeComponent = getByTestId("home");
    const salespersonNameInput = getByTestId("salesPersonName");
    const fileSelect = getByTestId("fileSelect");
    const generateStatementButton = getByTestId("generateButton");

    fireEvent.change(salespersonNameInput, {
      target: { value: "David Howell" }
    });
    fireEvent.change(fileSelect, { target: { files: [testFile] } });
    fireEvent.click(generateStatementButton);
    await wait(() => getByTestId("statement"));

    expect(getByTestId("statement")).toBeInTheDocument();
    expect(homeComponent).not.toBeInTheDocument();
  });

  it("can't generate statement when name validation fails", async () => {
    const originalAlert = global.alert;
    global.alert = jest.fn();
    readUploadedFileAsText.mockResolvedValue(sampleCsv);
    const { getByTestId, queryByTestId } = render(<App />);
    const testFile = new File([sampleCsv], "sample.csv", { type: "text/csv" });
    const fileSelect = getByTestId("fileSelect");
    const generateStatementButton = getByTestId("generateButton");

    fireEvent.change(fileSelect, { target: { files: [testFile] } });
    fireEvent.click(generateStatementButton);

    await explicitWait(500);

    const alertArguments = global.alert.mock.calls[0];
    expect(alertArguments).toContainMatch(/HomeValidationError:/);
    expect(alertArguments).toContainMatch(/enter the salesperson's name/);
    expect(alertArguments).toContainMatch(/before generating a statement/);
    expect(queryByTestId("statement")).not.toBeInTheDocument();
    expect(getByTestId("home")).toBeInTheDocument();

    global.alert = originalAlert;
  });

  it("can't generate statement when file validation fails", async () => {
    const originalAlert = global.alert;
    global.alert = jest.fn();
    readUploadedFileAsText.mockResolvedValue(sampleCsv);
    const { getByTestId, queryByTestId } = render(<App />);
    const salespersonNameInput = getByTestId("salesPersonName");
    const generateStatementButton = getByTestId("generateButton");

    fireEvent.change(salespersonNameInput, {
      target: { value: "James Bond" }
    });
    fireEvent.click(generateStatementButton);

    await explicitWait(500);

    const alertArguments = global.alert.mock.calls[0];
    expect(alertArguments).toContainMatch(/HomeValidationError:/);
    expect(alertArguments).toContainMatch(/Please select a file/);
    expect(alertArguments).toContainMatch(/before generating a statement/);
    expect(queryByTestId("statement")).not.toBeInTheDocument();
    expect(getByTestId("home")).toBeInTheDocument();

    global.alert = originalAlert;
  });
});
