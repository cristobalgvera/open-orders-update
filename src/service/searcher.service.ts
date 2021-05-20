import {ISearcher} from '../shared/interfaces/searcher.interface';
import {SpreadsheetInfo} from '../shared/interfaces/spreadsheet-info.interface';
import {HeaderExtractor} from '../worker/header-extractor.worker';
import {KeyCreator} from '../worker/key-creator.worker';
import {SpreadsheetExtractor} from '../worker/spreadsheet-extractor.worker';
import {ToBeSearchedFinder} from '../worker/to-be-searched-finder.worker';

export const Searcher: ISearcher = {
  getData: (spreadsheetInfo: SpreadsheetInfo) => {
    const data = SpreadsheetExtractor.extractPrincipalData(spreadsheetInfo);
    const {headers} = HeaderExtractor.extractHeaders(data);

    const toBeSearched = ToBeSearchedFinder.getToBeSearched(
      spreadsheetInfo.COLUMN
    );

    const searchedColumns = data.map(row =>
      toBeSearched.map(columnName => row[headers[columnName]])
    );

    return KeyCreator.createKey(searchedColumns, spreadsheetInfo.COLUMN);
  },
};
