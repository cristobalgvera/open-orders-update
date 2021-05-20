import {SpreadsheetInfo} from './spreadsheet-info.interface';

export interface ISearcher {
  getData: (spreadsheetInfo: SpreadsheetInfo) => string[][];
}
