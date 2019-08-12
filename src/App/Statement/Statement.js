import React from "react";
import PreTableContents from "./PreTableContent/PreTableContent";
import PayEarningsTable from "./PayEarningsTable/PayEarningsTable";
import PostTableContents from "./PostTableContent/PostTableContent";
import StatementError from "./StatementError/StatementError";
import getSheetFunctions from "../../functions/getSheetFunctions";
import extractData from "../../functions/extractData";
import { formatAndAlert } from "./statementHelper";

function Statement({ csvString, salespersonName }) {
  const { getCell, getColumn } = getSheetFunctions(csvString);
  const data = extractData({ getCell, getColumn, salespersonName });

  // Timeout necessary to let images load before printing
  React.useEffect(() => {
    const hasErrors = !data || data.errors.length !== 0;
    !hasErrors && setTimeout(window.print, 500);
  });

  if (!data) {
    return <StatementError />;
  } else if (data.errors.length !== 0) {
    formatAndAlert(data.errors);
    return <StatementError />;
  } else {
    return (
      <div data-testid="statement">
        <PreTableContents data={data} />
        <PayEarningsTable data={data} />
        <PostTableContents data={data} />
      </div>
    );
  }
}

export default Statement;
