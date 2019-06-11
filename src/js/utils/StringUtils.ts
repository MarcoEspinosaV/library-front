export const getInitials = (text: string) => {
  if (!text) {
    return '';
  }
  const textArray = text.split(' ');
  if (textArray.length === 1) {
    return textArray[0].charAt(0);
  }
  if (textArray.length === 2) {
    return textArray[0].charAt(0) + textArray[1].charAt(0);
  }
  return textArray[0].charAt(0) + textArray[2].charAt(0);
};

export const toUrl = (string: string) => {
  if (string) {
    let newUrl = string.replace(/ /g, '-');
    newUrl = newUrl.toLowerCase();
    newUrl = newUrl.replace(new RegExp(/\s/g), '');
    newUrl = newUrl.replace(new RegExp(/[àáâãäå]/g), 'a');
    newUrl = newUrl.replace(new RegExp(/[èéêë]/g), 'e');
    newUrl = newUrl.replace(new RegExp(/[ìíîï]/g), 'i');
    newUrl = newUrl.replace(new RegExp(/ñ/g), 'n');
    newUrl = newUrl.replace(new RegExp(/[òóôõö]/g), 'o');
    newUrl = newUrl.replace(new RegExp(/[ùúûü]/g), 'u');
    newUrl = newUrl.replace(/[`~¿¡!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    return newUrl;
  }
  return '';
};

export const replaceValues = (string: string, values: any): string => {
  let newString = string;
  if (string && string.match(/{{(.*?)}}/g)) {
    string.match(/{{(.*?)}}/g).forEach((val: any) => {
      const replace = new RegExp(val, 'g');
      const valueId = val.replace(/{|}/g, '');
      newString = newString.replace(
        replace,
        values[valueId] !== null || values[valueId] !== 'undefined' ? values[valueId] : ''
      );
      return val;
    });
  }
  return newString;
};
