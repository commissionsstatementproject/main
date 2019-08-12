import React from "react";
import "./PayEarningsTable.css";

function PayEarningsTable({ data }) {
  return (
    <div data-testid="payEarningsTable">
      <div className="text open-sans bold" data-testid="tableHeading">
        Sales Incentive Variable Pay Earnings for Quarter {data.quarter}
      </div>
      <table>
        <thead>
          <tr data-testid="tableComponent">
            <th className="text open-sans bold">Component (£)</th>
            <th className="text open-sans bold">
              Component Target Compensation
            </th>
            <th className="text open-sans bold">
              Component Achievement Level*
            </th>
            <th className="text open-sans bold">Payout Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr data-testid="tableCountryTeam">
            <td className="text open-sans">Country / Team</td>
            <td className="text open-sans">{data.countryVariableTargetPay}</td>
            <td className="text open-sans">
              {data.percentOfCountryRevenueAchieved}
            </td>
            <td className="text open-sans">{data.countryVariablePayEarned}</td>
          </tr>
          <tr data-testid="tableIndividualRevenue">
            <td className="text open-sans">Individual Revenue</td>
            <td className="text open-sans">
              {data.individualVariableTargetPay}
            </td>
            <td className="text open-sans">
              {data.percentOfIndividualTargetAchieved}
            </td>
            <td className="text open-sans">
              {data.individualVariablePayEarned}
            </td>
          </tr>
          <tr data-testid="tableIndividualSales">
            <td className="text open-sans">Individual Sales</td>
            <td className="text open-sans">
              {data.sowSignedVariableTargetPay}
            </td>
            <td className="text open-sans">
              {data.percentOfAtlTargetAchieved}
            </td>
            <td className="text open-sans">{data.atlVariablePayEarned}</td>
          </tr>
        </tbody>
      </table>
      <div className="text open-sans small" data-testid="tableFooter">
        *The sales incentive variable compensation payment is calculated based
        on the multiplier and formula defined in your Individual Plan document
        using the achievement level as the input. Please refer to your
        Individual Plan for further details.
      </div>
    </div>
  );
}

export default PayEarningsTable;
