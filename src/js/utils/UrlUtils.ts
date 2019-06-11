import { ROUTES } from '../routes';

export const getQueryParams = (variableData?: string) => {
  const variable = variableData || variableData === '' ? variableData : window.location.search;
  const vars = variable.split('&');
  const params: { [name: string]: any } = {};
  for (const row of vars) {
    const pair = row.split('=');
    if (pair.length === 2) {
      const paramKey = pair[0].replace(/\?/g, '');
      params[paramKey] = pair[1] === 'true' ? true : pair[1] === 'false' ? false : pair[1].replace(/%20/g, ' ');
    }
  }
  return params;
};

export const getQueryParamsArray = (variableData?: string) => {
  const variable = variableData || variableData === '' ? variableData : window.location.search;
  const vars = variable.split('&');
  const params: Array<{ key: string; value: string | boolean }> = [];
  for (const row of vars) {
    const pair = row.split('=');
    if (pair.length === 2) {
      const paramKey = pair[0].replace(/\?/g, '');
      params.push({
        key: paramKey,
        value: pair[1] === 'true' ? true : pair[1] === 'false' ? false : pair[1].replace(/%20/g, ' ')
      });
    }
  }
  return params;
};

export const getLocationData = (path: string) => {
  let currentData;
  Object.keys(ROUTES).forEach((key: string) => {
    if (path !== '/' && path.includes(ROUTES[key].path) && ROUTES[key].path !== '/') {
      currentData = { ...ROUTES[key] };
    }
  });
  if (path === '/') {
    currentData = { ...ROUTES.LOGIN };
  }
  return currentData;
};

export const getNextLocationData = (path: string, routesId: string[]) => {
  const routesArray = Object.keys(ROUTES)
    // .filter(key => routesId.includes(key))
    .map(key => ROUTES[key]);
  const index = routesArray.findIndex(item => {
    return path !== '/' && path.includes(item.path) && item.path !== '/';
  });
  return routesArray[index + 1];
};

export const updateUrlParams = (paramName: string, value: any, params?: string) => {
  const urlParams = getQueryParams(params || window.location.search);
  let url = '';
  let count = 0;
  if (!urlParams[paramName]) {
    urlParams[paramName] = value;
  }
  if (urlParams) {
    Object.keys(urlParams).map(item => {
      if (count === 0) {
        if (item === paramName) {
          url += `?${paramName}=${value}`;
        } else {
          url += `?${item}=${urlParams[item] || ''}`;
        }
        count += 1;
      } else {
        if (item === paramName) {
          url += `&${paramName}=${value}`;
        } else {
          url += `&${item}=${urlParams[item] || ''}`;
        }
      }
    });
  }
  return url;
};

export const removeUrlParams = (paramName: string, params?: string) => {
  const urlParams = getQueryParams(params || params === '' ? params : window.location.search);
  let url = '';
  let count = 0;
  if (urlParams[paramName]) {
    delete urlParams[paramName];
  }
  if (urlParams) {
    Object.keys(urlParams).map(item => {
      if (count === 0) {
        url += `?${item}=${urlParams[item] || ''}`;
        count += 1;
      } else {
        url += `&${item}=${urlParams[item] || ''}`;
      }
    });
  }
  return url;
};
