import React from "react";
import { cleanup, render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { explicitWait } from "./testHelpers/testSugar";
import { toContainMatch, toAllMatch } from "./testHelpers/customMatchers";

import App from "../App/App";
import { readUploadedFileAsText } from "../App/uploadHelper";

jest.mock("../App/uploadHelper", () => ({
  readUploadedFileAsText: jest.fn()
}));

import fs from "fs";
const sampleCsv = fs
  .readFileSync(`${process.cwd()}/src/test/testCsvs/sample.csv`)
  .toString();
const emptyCsv = fs
  .readFileSync(`${process.cwd()}/src/test/testCsvs/davidHowellCellsEmpty.csv`)
  .toString();
const badCsv = fs
  .readFileSync(`${process.cwd()}/src/test/testCsvs/emilyCareyBadData.csv`)
  .toString();

let stderr = console.error;
import {
  setupActWarningFilter,
  teardownActWarningFilter
} from "./testHelpers/actWarningFilter";

describe("The application validates against", () => {
  beforeEach(cleanup);
  beforeAll(() => {
    expect.extend({ toContainMatch, toAllMatch });
    setupActWarningFilter(stderr);
  });
  afterAll(() => teardownActWarningFilter(stderr));

  it("the required cells in the sheet being empty", async () => {
    const originalAlert = global.alert;
    global.alert = jest.fn();
    readUploadedFileAsText.mockResolvedValue(emptyCsv);
    const { getByTestId, queryByTestId } = render(<App />);
    const testFile = new File([emptyCsv], "empty.csv", { type: "text/csv" });
    const salespersonNameInput = getByTestId("salesPersonName");
    const fileSelect = getByTestId("fileSelect");
    const generateStatementButton = getByTestId("generateButton");

    fireEvent.change(salespersonNameInput, {
      target: { value: "David Howell" }
    });
    fireEvent.change(fileSelect, { target: { files: [testFile] } });
    fireEvent.click(generateStatementButton);

    await explicitWait(500);

    const alertArguments = global.alert.mock.calls[0][0].split("\n");
    expect(alertArguments).toContainMatch(/ExtractionError:/);
    expect(alertArguments).toContainMatch(/quarterlyVariableTarget/);
    expect(alertArguments).toContainMatch(/countryVariableTargetPay/);
    expect(alertArguments).toContainMatch(/percentOfCountryRevenueAchieved/);
    expect(alertArguments).toContainMatch(/countryVariablePayEarned/);
    expect(alertArguments).toContainMatch(/individualVariableTargetPay/);
    expect(alertArguments).toContainMatch(/percentOfIndividualTargetAchieved/);
    expect(alertArguments).toContainMatch(/individualVariablePayEarned/);
    expect(alertArguments).toContainMatch(/sowSignedVariableTargetPay/);
    expect(alertArguments).toContainMatch(/percentOfAtlTargetAchieved/);
    expect(alertArguments).toContainMatch(/atlVariablePayEarned/);
    expect(alertArguments).toContainMatch(/totalVariablePayEarned/);
    expect(alertArguments).toContainMatch(/boostersClaimed/);
    expect(alertArguments).toContainMatch(/totalVariableCompensation/);
    expect(alertArguments).toContainMatch(/paymentNotificationDate/);
    expect(alertArguments).toContainMatch(/quarter/);
    expect(alertArguments).toAllMatch(/at [0-9A-Z]{1,4} must not be empty/);
    expect(getByTestId("statementError")).toBeVisible();
    expect(queryByTestId("home")).not.toBeInTheDocument();

    global.alert = originalAlert;
  });

  it("the required cells having the wrong format", async () => {
    const originalAlert = global.alert;
    global.alert = jest.fn();
    readUploadedFileAsText.mockResolvedValue(badCsv);
    const { getByTestId, queryByTestId } = render(<App />);
    const testFile = new File([badCsv], "bad.csv", { type: "text/csv" });
    const salespersonNameInput = getByTestId("salesPersonName");
    const fileSelect = getByTestId("fileSelect");
    const generateStatementButton = getByTestId("generateButton");

    fireEvent.change(salespersonNameInput, {
      target: { value: "Emily Carey" }
    });
    fireEvent.change(fileSelect, { target: { files: [testFile] } });
    fireEvent.click(generateStatementButton);

    await explicitWait(500);

    const alertArguments = global.alert.mock.calls[0][0].split("\n");
    expect(alertArguments).toContainMatch(/ExtractionError:/);
    expect(alertArguments).toContainMatch(/quarterlyVariableTarget/);
    expect(alertArguments).toContainMatch(/countryVariableTargetPay/);
    expect(alertArguments).toContainMatch(/percentOfCountryRevenueAchieved/);
    expect(alertArguments).toContainMatch(/countryVariablePayEarned/);
    expect(alertArguments).toContainMatch(/individualVariableTargetPay/);
    expect(alertArguments).toContainMatch(/percentOfIndividualTargetAchieved/);
    expect(alertArguments).toContainMatch(/individualVariablePayEarned/);
    expect(alertArguments).toContainMatch(/sowSignedVariableTargetPay/);
    expect(alertArguments).toContainMatch(/percentOfAtlTargetAchieved/);
    expect(alertArguments).toContainMatch(/atlVariablePayEarned/);
    expect(alertArguments).toContainMatch(/totalVariablePayEarned/);
    expect(alertArguments).toContainMatch(/boostersClaimed/);
    expect(alertArguments).toContainMatch(/totalVariableCompensation/);
    expect(alertArguments).toContainMatch(/paymentNotificationDate/);
    expect(alertArguments).toContainMatch(/quarter/);
    expect(alertArguments).toAllMatch(/at [0-9A-Z]{1,4} has wrong format/);
    expect(getByTestId("statementError")).toBeVisible();
    expect(queryByTestId("home")).not.toBeInTheDocument();

    global.alert = originalAlert;
  });

  it("the salesperson's name not being in the sheet", async () => {
    const originalAlert = global.alert;
    global.alert = jest.fn();
    readUploadedFileAsText.mockResolvedValue(sampleCsv);
    const { getByTestId, queryByTestId } = render(<App />);
    const testFile = new File([sampleCsv], "sample.csv", { type: "text/csv" });
    const salespersonNameInput = getByTestId("salesPersonName");
    const fileSelect = getByTestId("fileSelect");
    const generateStatementButton = getByTestId("generateButton");

    fireEvent.change(salespersonNameInput, {
      target: { value: "incorrect salesman name" }
    });
    fireEvent.change(fileSelect, { target: { files: [testFile] } });
    fireEvent.click(generateStatementButton);

    await explicitWait(500);

    const alertArguments = global.alert.mock.calls[0][0].split("\n");
    expect(alertArguments.length).toEqual(1);
    expect(alertArguments).toContainMatch(/ExtractionError:/);
    expect(alertArguments).toContainMatch(/Salesperson not found/);
    expect(getByTestId("statementError")).toBeVisible();
    expect(queryByTestId("home")).not.toBeInTheDocument();

    global.alert = originalAlert;
  });
});
