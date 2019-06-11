export const getClassName = (prefix: string, blockClasses: string[]): string => {
  let className = null;
  blockClasses.forEach(item => {
    if (item.includes(prefix)) {
      className = item;
    }
  });
  return className;
};

export const newInmutableContent = (
  content: any[] | { [name: string]: any },
  firstKey: number | string,
  firstValue: any,
  secondKey?: number | string,
  secondValue?: any
) => {
  const firstLevelIsArray = Array.isArray(content);
};
