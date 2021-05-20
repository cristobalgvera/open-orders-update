import {SpreadsheetInfo} from '../shared/interfaces/spreadsheet-info.interface';

export const KeyFinder = {
  getKey: ({KEY, COMPOSED_KEY}: SpreadsheetInfo['COLUMN']) =>
    KEY ? [KEY] : Object.values(COMPOSED_KEY),
};
