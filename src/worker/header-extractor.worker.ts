import {Headers} from '../shared/interfaces/headers.interface';

export const HeaderExtractor = {
  extractHeaders: <T>(data: T[][]) => {
    const _data = data.map(row => [...row]);
    const rawHeaders = _data.splice(0, 1)[0].map(String);
    const headers: Headers = rawHeaders.reduce(
      (acc, header, i) => ({...acc, [header]: i}),
      {}
    );

    return {headers, values: _data};
  },
};
