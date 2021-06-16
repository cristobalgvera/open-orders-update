import {SPREADSHEET} from '../config/spreadsheet.config';
import {IStandardizeService} from '../shared/interfaces/service/standardize.interface';
import {Standardizer} from '../worker/standardizer.worker';

export const StandardizeService: IStandardizeService = {
  standardizePurchasesStatuses: (purchaseOrders: string[][]) =>
    Standardizer.standardizeStatuses(
      purchaseOrders,
      SPREADSHEET.PURCHASE_STATUSES
    ),
  standardizeRepairStatuses: (repairOrders: string[][]) =>
    Standardizer.standardizeStatuses(repairOrders, SPREADSHEET.REPAIR_STATUSES),
};
