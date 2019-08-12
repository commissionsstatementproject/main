import getSheetFunctions from "../functions/getSheetFunctions";

describe("getSheetFunctions()", () => {
  it("#getCell() - lets you get cell from sheet", () => {
    const csvData = "batsman,runs\nstokes,84\nbuttler,59";

    const { getCell } = getSheetFunctions(csvData);

    expect(getCell("A1")).toEqual("batsman");
    expect(getCell("B1")).toEqual("runs");
    expect(getCell("A2")).toEqual("stokes");
    expect(getCell("B2")).toEqual("84");
    expect(getCell("A3")).toEqual("buttler");
    expect(getCell("B3")).toEqual("59");
  });

  it("#getColumn() - lets you get column from sheet", () => {
    const csvData = "name,performance\njames,terrible\nmark,fine";
    const { getColumn } = getSheetFunctions(csvData);

    const columnA = getColumn("A");

    expect(columnA).toEqual(["name", "james", "mark"]);
  });

  it("needs the argument to be a text string", () => {
    const initializeSheetIncorrectly = () => {
      getSheetFunctions({ thisIsABadArgument: "because it isn't a string" });
    };

    expect(initializeSheetIncorrectly).toThrow(
      /must be initialized with csv data as a string/
    );
  });

  it("#getCell() - is case-insensitive", () => {
    const csvData = "sample data";

    const { getCell } = getSheetFunctions(csvData);

    expect(getCell("A1")).toEqual("sample data");
    expect(getCell("a1")).toEqual("sample data");
  });

  it("#getColumn - is case-insensitive", () => {
    const csvData = "sample data";

    const { getColumn } = getSheetFunctions(csvData);

    expect(getColumn("A")).toEqual(["sample data"]);
    expect(getColumn("a")).toEqual(["sample data"]);
  });

  it("#getCell - throws error when input is invalid", () => {
    const csvData = "city,population\ntokyo,38140000\njakarta,30539000";
    const expectedErrorMessage = /cell address for #getCell is invalid/;
    const { getCell } = getSheetFunctions(csvData);

    const notLetterNumberFormat = () => getCell("1234abcd");
    const moreThanThreeLetters = () => getCell("ABCD10");
    const moreThanFourNumbers = () => getCell("AB12345");

    expect(notLetterNumberFormat).toThrow(expectedErrorMessage);
    expect(moreThanThreeLetters).toThrow(expectedErrorMessage);
    expect(moreThanFourNumbers).toThrow(expectedErrorMessage);
  });

  it("#getColumn - throws error when input is invalid", () => {
    const csvData = "city,population\ntokyo,38140000\njakarta,30539000";
    const expectedErrorMessage = /column address for #getColumn is invalid/;
    const { getColumn } = getSheetFunctions(csvData);

    const nonLetterInput = () => getColumn("abcd1234");
    const moreThanThreeLetters = () => getColumn("ABCD");

    expect(nonLetterInput).toThrow(expectedErrorMessage);
    expect(moreThanThreeLetters).toThrow(expectedErrorMessage);
  });

  it("#getCell - returns undefined when cell is empty", () => {
    const csvData = "cell 1, cell 2";
    const { getCell } = getSheetFunctions(csvData);

    expect(getCell("A3")).toBeUndefined();
  });

  it("#getColumn - returns empty array when entire column is empty", () => {
    const csvData = "column A,column B\n1,2\n3,4";
    const { getColumn } = getSheetFunctions(csvData);

    const columnC = getColumn("C");

    expect(columnC).toEqual([]);
  });

  it("#getColumn/#getCell - accepts UNIX and Windows line endings", () => {
    const unixData = "column A,column B\n1,2\n3,4";
    const windowsData = "column A,column B\r\n1,2\r\n3,4";

    const { sheet: unixSheet } = getSheetFunctions(unixData);
    const { sheet: windowsSheet } = getSheetFunctions(windowsData);

    expect(unixSheet).toEqual(windowsSheet);
  });

  it("#getColumn/#getCell - handles quoted cell contents correctly", () => {
    const csvData = 'column A,"comma inside cell: ,"';
    const { getCell, getColumn } = getSheetFunctions(csvData);

    expect(getCell("B1")).toEqual("comma inside cell: ,");
    expect(getColumn("B")).toContain("comma inside cell: ,");
  });
});
