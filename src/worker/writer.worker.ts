import {SHEET_NAME} from '../enum/sheet.enum';

type SpreadsheetSheet = {spreadsheetId: string; sheetName: SHEET_NAME};

export const Writer = {
  overwrite: (
    data: string[][],
    {spreadsheetId, sheetName}: SpreadsheetSheet
  ) => {
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName(sheetName);

    sheet.clearContents();
    sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  },
};
