export const hashCode = (value: any) => {
  const res =
    typeof value === 'string' || value instanceof String ? value.toLowerCase() : JSON.stringify(value).toLowerCase();
  let hash = 0;
  let i;
  let chr;
  if (res.length === 0) {
    return hash;
  }
  /* tslint:disable:no-bitwise */
  for (i = 0; i < res.length; i += 1) {
    chr = res.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  /* tslint:enable:no-bitwise */
  return hash;
};
