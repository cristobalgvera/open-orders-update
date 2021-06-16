export interface IStandardizeService {
  standardizePurchasesStatuses: (purchaseOrders: string[][]) => string[][];
  standardizeRepairStatuses: (repairOrders: string[][]) => string[][];
}
