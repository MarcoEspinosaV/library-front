export const validateCompleteData = (data: any, validValues: string[]) => {
  let invalidItems = 0;
  validValues.map(item => {
    if (!Object.keys(data).find(entryData => !data[entryData])) {
      invalidItems += 1;
    }
  });
  return !!invalidItems;
};
