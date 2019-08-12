import { columnDefinitions, cellDefinitions } from "../../sheetDefinitions";
import cloneDeep from "lodash.clonedeep";

export const extractionError = message => {
  return new Error(`ExtractionError: ${message}`);
};

const combineSheetDefs = rowNumber => {
  const columnDefsCopy = cloneDeep(columnDefinitions);
  Object.keys(columnDefsCopy).forEach(
    key => (columnDefsCopy[key].address += rowNumber)
  );
  return Object.assign({}, columnDefsCopy, cellDefinitions);
};

export const throwExtractionError = message => {
  throw extractionError(message);
};

export const getRowNumberOfSalesman = ({ getColumn, salespersonName }) => {
  const namesColumn = getColumn(columnDefinitions.salespersonName.address);
  const nameIndex = namesColumn.findIndex(nameInCell => {
    const cleanedNameInCell = nameInCell.trim().toLowerCase();
    const cleanedSalesPersonName = salespersonName.trim().toLowerCase();
    return cleanedNameInCell === cleanedSalesPersonName;
  });

  return parseInt(nameIndex) + 1;
};

export const isNameInSheet = rowNumber => rowNumber > 0;

export const grabDataFromSheet = ({ getCell, rowNumber }) => {
  const data = {};
  const columnKeys = Object.keys(columnDefinitions);
  const cellKeys = Object.keys(cellDefinitions);

  columnKeys.forEach(key => {
    const columnLetter = columnDefinitions[key].address;
    data[key] = getCell(columnLetter + rowNumber);
  });
  cellKeys.forEach(key => {
    data[key] = getCell(cellDefinitions[key].address);
  });

  return data;
};

export const collectErrorsInData = ({ data, rowNumber }) => {
  const dataKeys = Object.keys(data).filter(key => key !== "salespersonName");
  const sheetDefs = combineSheetDefs(rowNumber);

  const errors = [];

  dataKeys.forEach(key => {
    const isRequired = sheetDefs[key].required;
    const validationRegex = sheetDefs[key].format;

    if (isRequired && data[key] === "") {
      errors.push(
        extractionError(`${key} at ${sheetDefs[key].address} must not be empty`)
      );
    } else if (!data[key].match(validationRegex)) {
      errors.push(
        extractionError(`${key} at ${sheetDefs[key].address} has wrong format`)
      );
    }
  });

  return errors;
};
