import {SPREADSHEET_TO_WRITE} from '../config/spreadsheet-to-write.config';
import {IWriteService} from '../shared/interfaces/service/write.interface';
import {Writer} from '../worker/writer.worker';

export const WriteService: IWriteService = {
  overwritePurchasesData: openPurchases => {
    Writer.overwrite(openPurchases, {
      spreadsheetId: SPREADSHEET_TO_WRITE.OPEN_ORDERS_UPDATE.ID,
      sheetName: SPREADSHEET_TO_WRITE.OPEN_ORDERS_UPDATE.SHEET.PURCHASES,
    });
  },
  overwriteRepairsData: openRepairs => {
    Writer.overwrite(openRepairs, {
      spreadsheetId: SPREADSHEET_TO_WRITE.OPEN_ORDERS_UPDATE.ID,
      sheetName: SPREADSHEET_TO_WRITE.OPEN_ORDERS_UPDATE.SHEET.REPAIRS,
    });
  },
};
