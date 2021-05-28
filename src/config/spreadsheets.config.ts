import {SpreadsheetStructure} from '../shared/interfaces/spreadsheet-structure.interface';

export const SPREADSHEETS: SpreadsheetStructure = {
  IRM_BRA: {
    ID: '1mesrtcwQ0nXI9V_fbrT5cFp34nfTwy7PL8ldajQc5pA',
    SHEET: {
      PRINCIPAL: 'COMPRAS',
    },
    COLUMN: {
      KEY: 'Chave cruzamento',
      COMPOSED_KEY: {
        A_DOC_COMPRA: 'Doc Compra',
        B_PN: 'PN',
      },
      TO_BE_SEARCHED: {
        CRITICO: 'Critico',
        CRITICIDADE: 'CRITICIDADE',
      },
    },
  },
  IRM_SSC: {
    ID: '1tO51y02sNY1LIoiIWy4YVCFEWG1ew-XhSowY9Pm2OVU',
    SHEET: {
      PRINCIPAL: 'IRM SSC',
    },
    COLUMN: {
      KEY: null,
      COMPOSED_KEY: {
        A_PO_CODE: 'PO_Code',
        B_REFERENCE_CODE: 'Reference_Code',
      },
      TO_BE_SEARCHED: {
        PRIORIDAD: 'Prioridad',
      },
    },
  },
  SOPORTE_RECOVERY: {
    ID: '1oxeUdQkSiX2zkbaPRf5VLTpUsEm8r_j4ok6pz0-MHOM',
    SHEET: {
      PRINCIPAL: 'Respuestas de formulario 1',
    },
    COLUMN: {
      KEY: null,
      COMPOSED_KEY: {
        A_PO: 'PO/RO',
        B_PART_NUMBER: 'PART NUMBER',
      },
      TO_BE_SEARCHED: {
        FECHA: 'FECHA',
        SOMA_PN: 'SOMA PN',
      },
    },
  },
  FUP_T90: {
    ID: '15eyvOcJoWV0CSyePB03qYwRsg9YJQGp-TtERD6c50AQ',
    SHEET: {
      PRINCIPAL: 'FUP ACTUAL',
    },
    COLUMN: {
      KEY: 'POPN',
      COMPOSED_KEY: {
        A_PO: "PO's/RC's",
        B_PREF_COMPRA: 'Pref_Compra',
      },
      TO_BE_SEARCHED: {
        A_DATA_STUDIO: 'Data studio',
      },
    },
  },
};
