export interface SpreadsheetInfo {
  ID: string;
  SHEET: {
    PRINCIPAL: string;
    [sheetName: string]: string;
  };
  COLUMN: {
    KEY: string;
    COMPOSED_KEY?: {[keyColumnName: string]: string};
    TO_BE_SEARCHED: {
      [columnName: string]: string;
    };
  };
}
