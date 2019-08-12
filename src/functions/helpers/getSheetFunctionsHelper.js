export const validateAgainstNonStringInput = arg => {
  if (typeof arg !== "string") {
    throw new Error(
      "SheetError: Sheet must be initialized with csv data as a string"
    );
  }
};

export const validateAgainstInvalidCellAddress = cellAddress => {
  const validAddressRegex = /^[A-Za-z]{1,3}[0-9]{1,4}$/;
  if (!cellAddress.match(validAddressRegex)) {
    throw new Error("SheetError: cell address for #getCell is invalid");
  }
};

export const validateAgainstInvalidColumnAddress = columnAddress => {
  const validAddressRegex = /^[A-Za-z]{1,3}$/;
  if (!columnAddress.match(validAddressRegex)) {
    throw new Error("SheetError: column address for #getColumn is invalid");
  }
};

export const getCellIndices = ({ letter, number }) => {
  const columnIndex = columnIndices[letter];
  const rowIndex = parseInt(number) - 1;

  return { columnIndex, rowIndex };
};

export const parseLetter = mixedStringInput => {
  return mixedStringInput.replace(/[^A-Za-z]/g, "").toLowerCase();
};

export const parseCellAddressString = cellAddressString => {
  const letter = parseLetter(cellAddressString);
  const number = cellAddressString.replace(/[^0-9]/g, "");

  return { letter, number };
};

export const columnIndices = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
  aa: 26,
  ab: 27,
  ac: 28,
  ad: 29,
  ae: 30,
  af: 31,
  ag: 32,
  ah: 33,
  ai: 34,
  aj: 35
};
