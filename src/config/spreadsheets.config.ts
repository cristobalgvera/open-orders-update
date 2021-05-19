interface SpreadsheetStructure {
  [spreadsheetName: string]: {
    ID: string;
    SHEET: {
      PRINCIPAL: string;
      [sheetName: string]: string;
    };
    COLUMN: {
      KEY: string;
      COMPOSED_KEY?: {[keyColumnName: string]: string};
      [columnName: string]: string | {};
    };
  };
}

export const SPREADSHEETS: SpreadsheetStructure = {
  IRM_BRA: {
    ID: '1mesrtcwQ0nXI9V_fbrT5cFp34nfTwy7PL8ldajQc5pA',
    SHEET: {
      PRINCIPAL: 'COMPRAS',
    },
    COLUMN: {
      KEY: 'Chave cruzamento',
      CRITICO: 'Critico',
      CRITICIDADE: 'CRITICIDADE',
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
        PO_CODE: 'PO_Code',
        REFERENCE_CODE: 'Reference_Code',
      },
      PRIORIDAD: 'Prioridad',
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
        PO: 'PO/RO',
        PART_NUMBER: 'PART NUMBER',
      },
      FECHA: 'FECHA',
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
        PO: "PO's/RC's",
        PREF_COMPRA: 'Pref_Compra',
      },
    },
  },
};
