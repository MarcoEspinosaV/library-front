export const TextWithVariables = (text: string, variables: { [name: string]: string }) => {
  let textReplace = text;
  const arrayKeys: any = [];
  Object.keys(variables).map(item => arrayKeys.push(item));
  arrayKeys.map((item: any) => {
    textReplace = textReplace.replace(`[${item}]`, variables[item]);
  });
  return textReplace;
};
