import { AUTHENTICATION_TYPES } from '../constants/authenticationConstants';
import { APP_THEMES } from '../constants/themes';
import LoginContainer from '../containers/sections/login/LoginContainer';

export const LOGIN_ROUTES: any = {
  /* tslint:disable:object-literal-sort-keys */
  LOGIN: {
    authentication: AUTHENTICATION_TYPES.LOGIN,
    component: LoginContainer,
    customLink: null,
    icon: '',
    id: 'LOGIN',
    key: 'login',
    name: 'ingresar',
    path: '/',
    roles: [],
    showOn: [AUTHENTICATION_TYPES.LOGIN],
    showTitles: false,
    subTitle: false,
    theme: APP_THEMES.LOGIN.id,
    title: 'Ingresar'
  },
  /* tslint:enable:object-literal-sort-keys */
};
