import { toContainMatch, toAllMatch } from "./testHelpers/customMatchers";
import extractData from "../functions/extractData";
import getSheetFunctions from "../functions/getSheetFunctions";

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

describe("extractData()", () => {
  beforeAll(() => expect.extend({ toContainMatch, toAllMatch }));

  it("extracts data from a sheet", () => {
    const { getCell, getColumn } = getSheetFunctions(sampleCsv);
    const salespersonName = "Darren Jackson";

    const data = extractData({ getCell, getColumn, salespersonName });

    expect(data.salespersonName).toEqual("Darren Jackson");
    expect(data.paymentNotificationDate).toEqual("25/07/2019");
    expect(data.quarterlyVariableTarget).toEqual("11,973.01");
    expect(data.countryVariableTargetPay).toEqual("1,000.00");
    expect(data.percentOfCountryRevenueAchieved).toEqual("66.40%");
    expect(data.countryVariablePayEarned).toEqual("-");
    expect(data.individualVariableTargetPay).toEqual("8,475.00");
    expect(data.percentOfIndividualTargetAchieved).toEqual("47.10%");
    expect(data.sowSignedVariableTargetPay).toEqual("2,498.01");
    expect(data.percentOfAtlTargetAchieved).toEqual("59.50%");
    expect(data.atlVariablePayEarned).toEqual("1,485.57");
    expect(data.totalVariablePayEarned).toEqual("1,485.57");
    expect(data.boostersClaimed).toEqual("5,000.00");
    expect(data.totalVariableCompensation).toEqual("6,485.57");
    expect(data.errors).toEqual([]);
  });

  it("is case-insensitive for name lookup in sheet", () => {
    const { getCell, getColumn } = getSheetFunctions(sampleCsv);
    const salespersonName = "emily carey";

    const data = extractData({ getCell, getColumn, salespersonName });

    expect(data.salespersonName).toEqual("Emily Carey");
  });

  it("ignores leading/trailing whitespace for name lookup in sheet", () => {
    const { getCell, getColumn } = getSheetFunctions(sampleCsv);
    const salespersonName = "           David Howell ";

    const data = extractData({ getCell, getColumn, salespersonName });

    expect(data.salespersonName).toEqual("David Howell");
  });

  it("returns errors from parsing empty cells in an array", () => {
    const { getCell, getColumn } = getSheetFunctions(emptyCsv);
    const salespersonName = "David Howell";

    const data = extractData({ getCell, getColumn, salespersonName });

    const errorMessages = data.errors.map(error => error.message);
    expect(errorMessages).toAllMatch(/ExtractionError:/);
    expect(errorMessages).toContainMatch(/quarterlyVariableTarget/);
    expect(errorMessages).toContainMatch(/countryVariableTargetPay/);
    expect(errorMessages).toContainMatch(/percentOfCountryRevenueAchieved/);
    expect(errorMessages).toContainMatch(/countryVariablePayEarned/);
    expect(errorMessages).toContainMatch(/individualVariableTargetPay/);
    expect(errorMessages).toContainMatch(/percentOfIndividualTargetAchieved/);
    expect(errorMessages).toContainMatch(/individualVariablePayEarned/);
    expect(errorMessages).toContainMatch(/sowSignedVariableTargetPay/);
    expect(errorMessages).toContainMatch(/percentOfAtlTargetAchieved/);
    expect(errorMessages).toContainMatch(/atlVariablePayEarned/);
    expect(errorMessages).toContainMatch(/totalVariablePayEarned/);
    expect(errorMessages).toContainMatch(/boostersClaimed/);
    expect(errorMessages).toContainMatch(/totalVariableCompensation/);
    expect(errorMessages).toContainMatch(/paymentNotificationDate/);
    expect(errorMessages).toAllMatch(/at [0-9A-Z]{1,4} must not be empty/);
  });

  it("returns errors from parsing bad data in an array", () => {
    const { getCell, getColumn } = getSheetFunctions(badCsv);
    const salespersonName = "Emily Carey";

    const data = extractData({ getCell, getColumn, salespersonName });

    const errorMessages = data.errors.map(error => error.message);
    expect(errorMessages).toAllMatch(/ExtractionError:/);
    expect(errorMessages).toContainMatch(/quarterlyVariableTarget/);
    expect(errorMessages).toContainMatch(/countryVariableTargetPay/);
    expect(errorMessages).toContainMatch(/percentOfCountryRevenueAchieved/);
    expect(errorMessages).toContainMatch(/countryVariablePayEarned/);
    expect(errorMessages).toContainMatch(/individualVariableTargetPay/);
    expect(errorMessages).toContainMatch(/percentOfIndividualTargetAchieved/);
    expect(errorMessages).toContainMatch(/individualVariablePayEarned/);
    expect(errorMessages).toContainMatch(/sowSignedVariableTargetPay/);
    expect(errorMessages).toContainMatch(/percentOfAtlTargetAchieved/);
    expect(errorMessages).toContainMatch(/atlVariablePayEarned/);
    expect(errorMessages).toContainMatch(/totalVariablePayEarned/);
    expect(errorMessages).toContainMatch(/boostersClaimed/);
    expect(errorMessages).toContainMatch(/totalVariableCompensation/);
    expect(errorMessages).toContainMatch(/paymentNotificationDate/);
    expect(errorMessages).toAllMatch(/at [0-9A-Z]{1,4} has wrong format/);
  });

  it("returns error when the salesperson is not found", () => {
    const { getCell, getColumn } = getSheetFunctions(sampleCsv);
    const salespersonName = "Rowan Atkinson";

    const data = extractData({ getCell, getColumn, salespersonName });
    const errorMessages = data.errors.map(error => error.message);

    expect(errorMessages.length).toEqual(1);
    expect(errorMessages).toContainMatch(/ExtractionError:/);
    expect(errorMessages).toContainMatch(/Salesperson not found/);
  });
});
