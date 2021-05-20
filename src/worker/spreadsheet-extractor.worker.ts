import {SpreadsheetInfo} from '../shared/interfaces/spreadsheet-info.interface';

export const SpreadsheetExtractor = {
  extractPrincipalData: ({ID, SHEET: {PRINCIPAL}}: SpreadsheetInfo) => {
    const spreadsheet = SpreadsheetApp.openById(ID);
    const sheet = spreadsheet.getSheetByName(PRINCIPAL);

    return sheet.getDataRange().getValues() as string[][];
  },
};
