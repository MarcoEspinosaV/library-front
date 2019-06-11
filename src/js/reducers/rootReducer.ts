import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import loaderReducer, { ILoaderReducer } from './loaderReducer';
import loginReducer, { ILoginReducer } from './loginReducer';
import uiReducer, { IUIReducer } from './uiReducer';

export interface IApp {
  router: RouterState;
  uiReducer: IUIReducer;
  loaderReducer: ILoaderReducer;
  loginReducer: ILoginReducer;
}

export default (history: History): any =>
  combineReducers({
    loaderReducer,
    loginReducer,
    router: connectRouter(history),
    uiReducer,
  });
