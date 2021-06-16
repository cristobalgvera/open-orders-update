import {SearchService} from '../service/search.service';
import {SpreadsheetInfo} from '../shared/interfaces/spreadsheet-info.interface';

export const Standardizer = {
  standardizeStatuses: (orders: string[][], statuses: SpreadsheetInfo) => {
    const standardizedStatuses = SearchService.getData(statuses);
    const standardizedStatusesObject = standardizedStatuses.reduce(
      (acc: {[x: string]: string}, [nonStandardStatus, standardStatus]) => ({
        ...acc,
        [nonStandardStatus.toLocaleLowerCase().trim()]: standardStatus,
      }),
      {}
    );

    const nonStandardizedStatusesColumnName = standardizedStatuses[0][0]; // Headers[0] -> Key;
    const nonStandardizedStatusesIndex = orders[0].indexOf(
      nonStandardizedStatusesColumnName
    );

    return orders.map(order => {
      const nonStandardizedStatus = order[nonStandardizedStatusesIndex]
        .toLocaleLowerCase()
        .trim();
      const standardizedStatus =
        standardizedStatusesObject[nonStandardizedStatus];

      return [...order, standardizedStatus];
    });
  },
};
