import {ToJoin} from '../shared/interfaces/to-join.interface';

export const Joiner = {
  joinByKey: (toJoin: ToJoin) => {
    let headersLength = 1;
    const keyPosition = 0;
    const alreadyJoined: {[key: string]: number} = {}; // To improve performance
    const mergedData: string[][] = [['Key']];

    function normalize(row: string[]) {
      const differenceToAdd = headersLength - row.length;

      // Add many undefined elements to existent
      // data arrays as headers totals (arr.length = 100 doesn't works)
      for (let j = 0; j < differenceToAdd; j++) row.push(undefined);

      return row;
    }

    Object.values(toJoin).forEach(dataset =>
      dataset.forEach(([key, ...data], i) => {
        if (!i) {
          headersLength = mergedData[keyPosition].push(...data); // Add new headers of each dataset keeping key column constant
          return;
        }

        alreadyJoined[key] ??= mergedData.push([key]) - 1;

        const atPosition = alreadyJoined[key];

        mergedData[atPosition] = normalize(mergedData[atPosition]);

        // Remove many undefined elements as data to add length
        // In other words, remove previously added undefined
        mergedData[atPosition].splice(
          headersLength - data.length,
          data.length,
          ...data
        );
      })
    );

    return mergedData.map(normalize);
  },
};
