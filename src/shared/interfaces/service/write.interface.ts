export interface IWriteService {
  overwritePurchasesData: (openPurchases: string[][]) => void;
  overwriteRepairsData: (openRepairs: string[][]) => void;
}
