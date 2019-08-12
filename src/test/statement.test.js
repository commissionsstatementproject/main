import React from "react";
import { cleanup, render, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Statement from "../App/Statement/Statement";
import getSheetFunctions from "../functions/getSheetFunctions";
import extractData from "../functions/extractData";
const salespersonName = "Emily Carey";
let page, data;

import fs from "fs";
const sampleCsv = fs
  .readFileSync(`${process.cwd()}/src/test/testCsvs/sample.csv`)
  .toString();

describe("The statement page", () => {
  beforeAll(() => {
    const { getCell, getColumn } = getSheetFunctions(sampleCsv);
    data = extractData({ getCell, getColumn, salespersonName });
  });
  beforeEach(() => {
    cleanup();
    const { container } = render(
      <Statement csvString={sampleCsv} salespersonName="Emily Carey" />
    );
    page = container;
  });

  it("renders the ThoughtWorks logo", () => {
    expect(getByTestId(page, "logoImg")).toBeVisible();
  });

  it("renders the name and date", () => {
    const nameAndDate = getByTestId(page, "nameAndDate");
    expect(nameAndDate).toBeVisible();
    expect(nameAndDate).toHaveTextContent(`Name: ${data.salespersonName}`);
    expect(nameAndDate).toHaveTextContent(
      `Date: ${data.paymentNotificationDate}`
    );
  });

  it("renders the desired pre-table text", () => {
    const preTableText = getByTestId(page, "preTableText");
    expect(preTableText).toBeVisible();
    expect(preTableText).toHaveTextContent(
      `achievement of Quarter ${data.quarter}`
    );
    expect(preTableText).toHaveTextContent(
      `Amount for Quarter ${data.quarter}: £${data.quarterlyVariableTarget}`
    );
  });

  it("renders the table, table heading and table footer", () => {
    const tableHeading = getByTestId(page, "tableHeading");
    const table = getByTestId(page, "payEarningsTable");
    const tableFooter = getByTestId(page, "tableFooter");

    expect(tableHeading).toBeVisible();
    expect(tableHeading).toHaveTextContent(
      `Earnings for Quarter ${data.quarter}`
    );
    expect(table).toBeVisible();
    expect(tableFooter).toBeVisible();
  });

  it("renders the correct content in the table", () => {
    const tableRow1 = getByTestId(page, "tableComponent");
    const tableRow2 = getByTestId(page, "tableCountryTeam");
    const tableRow3 = getByTestId(page, "tableIndividualRevenue");
    const tableRow4 = getByTestId(page, "tableIndividualSales");

    expect(tableRow1).toBeVisible();
    expect(tableRow2).toBeVisible();
    expect(tableRow2).toHaveTextContent(data.countryVariableTargetPay);
    expect(tableRow2).toHaveTextContent(data.percentOfCountryRevenueAchieved);
    expect(tableRow2).toHaveTextContent(data.countryVariablePayEarned);
    expect(tableRow3).toBeVisible();
    expect(tableRow3).toHaveTextContent(data.individualVariableTargetPay);
    expect(tableRow3).toHaveTextContent(data.percentOfIndividualTargetAchieved);
    expect(tableRow3).toHaveTextContent(data.individualVariablePayEarned);
    expect(tableRow4).toBeVisible();
    expect(tableRow4).toHaveTextContent(data.sowSignedVariableTargetPay);
    expect(tableRow4).toHaveTextContent(data.percentOfAtlTargetAchieved);
    expect(tableRow4).toHaveTextContent(data.atlVariablePayEarned);
  });

  it("renders the correct text after the table", () => {
    const postTableText = getByTestId(page, "postTableText");

    expect(postTableText).toBeVisible();
    expect(postTableText).toHaveTextContent(
      `incentive variable pay is: £${data.totalVariablePayEarned}`
    );
    expect(postTableText).toHaveTextContent(
      `booster pay is: £${data.boostersClaimed}`
    );
    expect(postTableText).toHaveTextContent(
      `gross Sales incentive payout is: £${data.totalVariableCompensation}`
    );
  });

  it("renders the text where the signature will go", () => {
    const signature = getByTestId(page, "signature");
    expect(signature).toBeVisible();
  });

  it("renders the text where the asterisks (footer) will go", () => {
    const asterisks = getByTestId(page, "asterisks");
    expect(asterisks).toBeVisible();
  });
});
