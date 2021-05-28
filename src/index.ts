import {SPREADSHEETS} from './config/spreadsheets.config';
import {Searcher} from './service/searcher.service';
import {Joiner} from './worker/joiner.worker';

function test() {
  const irmBraData = Searcher.getData(SPREADSHEETS.IRM_BRA);
  const fupT90Data = Searcher.getData(SPREADSHEETS.FUP_T90);
  const irmSscData = Searcher.getData(SPREADSHEETS.IRM_SSC);
  const soporteRecoveryData = Searcher.getData(SPREADSHEETS.SOPORTE_RECOVERY);

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
