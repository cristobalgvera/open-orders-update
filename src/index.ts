import {SPREADSHEETS} from './config/spreadsheets.config';
import {Searcher} from './service/searcher.service';

function test() {
  const irmBraData = Searcher.getData(SPREADSHEETS.IRM_BRA);
  const fupT90Data = Searcher.getData(SPREADSHEETS.FUP_T90);
  const irmSscData = Searcher.getData(SPREADSHEETS.IRM_SSC);
  const soporteRecoveryData = Searcher.getData(SPREADSHEETS.SOPORTE_RECOVERY);

  console.log({
    irmBraData: irmBraData.splice(0, 3),
    fupT90Data: fupT90Data.splice(0, 3),
    irmSscData: irmSscData.splice(0, 3),
    soporteRecoveryData: soporteRecoveryData.splice(0, 3),
  });
}
