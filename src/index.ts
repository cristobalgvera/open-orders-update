import {SPREADSHEET} from './config/spreadsheet.config';
import {SearchService} from './service/search.service';
import {StandardizeService} from './service/standardize.service';
import {WriteService} from './service/write.service';
import {Joiner} from './worker/joiner.worker';

function test() {
  const irmBraData = SearchService.getData(SPREADSHEET.IRM_BRA);
  const fupT90Data = SearchService.getData(SPREADSHEET.FUP_T90);
  const irmSscData = SearchService.getData(SPREADSHEET.IRM_SSC);
  const soporteRecoveryData = SearchService.getData(
    SPREADSHEET.SOPORTE_RECOVERY
  );

  const mergedData = Joiner.joinByKey({
    irmBraData,
    irmSscData,
    fupT90Data,
    soporteRecoveryData,
  });

  const sheet = SpreadsheetApp.openById(
    '1EIiHMc23FFEZlYHMLuN9-JuJmxoNg722x5M1Zh24Jic'
  ).getSheetByName('Update');
  sheet
    .getRange(1, 1, mergedData.length, mergedData[0].length)
    .setValues(mergedData);
}

function extractOpenRepairsData() {
  const openRepairsData = SearchService.getData(SPREADSHEET.OPEN_REPAIRS);
  const standardizedStatusData =
    StandardizeService.standardizeRepairStatuses(openRepairsData);

  WriteService.overwriteRepairsData(standardizedStatusData);
}

function extractOpenPurchasesData() {
  const openPurchasesData = SearchService.getData(SPREADSHEET.OPEN_PURCHASES);
  const standardizedStatusData =
    StandardizeService.standardizePurchasesStatuses(openPurchasesData);

  WriteService.overwritePurchasesData(standardizedStatusData);
}
