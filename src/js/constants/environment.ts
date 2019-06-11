export const IS_PRODUCTION: boolean = !!(
  process &&
  process.env &&
  process.env.NODE_ENV &&
  process.env.NODE_ENV === 'production'
);

// export const HOST: string = IS_PRODUCTION ? 'http://45.79.199.203:3010/' : 'http://localhost:3010/';
export const HOST: string = IS_PRODUCTION ? 'http://45.79.199.203:3010/' : 'http://45.79.199.203:3010/';
