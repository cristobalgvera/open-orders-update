import {SpreadsheetInfo} from '../shared/interfaces/spreadsheet-info.interface';
import {HeaderExtractor} from './header-extractor.worker';
import {KeyFinder} from './key-finder.worker';

export const KeyCreator = {
  createKey: (data: string[][], column: SpreadsheetInfo['COLUMN']) => {
    const key = KeyFinder.getKey(column);

    const {headers} = HeaderExtractor.extractHeaders(data);

    return data.map(row => [
      key.map(columnName => row[headers[columnName]]).join(''),
      ...row.slice(key.length),
    ]);
  },
};
