import {SpreadsheetInfo} from '../spreadsheet-info.interface';

export interface ISearchService {
  getData: (spreadsheetInfo: SpreadsheetInfo) => string[][];
}
