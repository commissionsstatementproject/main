import {
  getRowNumberOfSalesman,
  isNameInSheet,
  collectErrorsInData,
  grabDataFromSheet,
  extractionError
} from "./helpers/extractionHelper";

function extractData(args) {
  const { salespersonName, getCell, getColumn } = args;

  const rowNumber = getRowNumberOfSalesman({ getColumn, salespersonName });
  if (!isNameInSheet(rowNumber)) {
    return { errors: [extractionError("Salesperson not found")] };
  }

  const data = grabDataFromSheet({ getCell, rowNumber });

  const errors = collectErrorsInData({ data, rowNumber });
  data.errors = errors;

  return data;
}

export default extractData;
