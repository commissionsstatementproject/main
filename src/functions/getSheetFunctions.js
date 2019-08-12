import {
  columnIndices,
  validateAgainstNonStringInput,
  validateAgainstInvalidCellAddress,
  validateAgainstInvalidColumnAddress,
  parseCellAddressString,
  getCellIndices
} from "./helpers/getSheetFunctionsHelper";
import * as CSV from "csv-string";

function getSheetFunctions(sheetString) {
  validateAgainstNonStringInput(sheetString);
  const sheet = CSV.parse(sheetString);

  const getCell = cellAddressString => {
    validateAgainstInvalidCellAddress(cellAddressString);
    const { letter, number } = parseCellAddressString(cellAddressString);
    const { columnIndex, rowIndex } = getCellIndices({ letter, number });
    const row = sheet[rowIndex];
    return row ? row[columnIndex] : undefined;
  };

  const getColumn = letter => {
    validateAgainstInvalidColumnAddress(letter);
    const sanitizedLetter = letter.replace(/[^A-Za-z]/g, "").toLowerCase();
    const columnIndex = columnIndices[sanitizedLetter];
    const column = sheet.map(row => row[columnIndex]);
    return column.every(element => !element) ? [] : column;
  };

  return { sheet, getCell, getColumn };
}

export default getSheetFunctions;
