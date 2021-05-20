import {SpreadsheetInfo} from '../shared/interfaces/spreadsheet-info.interface';
import {KeyFinder} from './key-finder.worker';

type ToBeSearched = SpreadsheetInfo['COLUMN'];

export const ToBeSearchedFinder = {
  getToBeSearched: (toBeSearched: ToBeSearched) => {
    const columnNames = Object.values(toBeSearched.TO_BE_SEARCHED);
    const key = KeyFinder.getKey(toBeSearched);

    return key.concat(columnNames);
  },
};
