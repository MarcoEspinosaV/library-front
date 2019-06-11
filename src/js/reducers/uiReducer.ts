import { LOCATION_CHANGE } from 'connected-react-router';
import { AnyAction } from 'redux';

import { LOGIN_ACTIONS, UI_ACTIONS } from '../actions';

export interface IUIReducer {
  collapseSideNav: boolean;
  language: string;
  openResponsiveNav: boolean;
}

const UIReducerState: IUIReducer = {
  collapseSideNav: false,
  language: 'es_EC',
  openResponsiveNav: false
};

const loginReducer = (state: IUIReducer = UIReducerState, action: AnyAction): IUIReducer => {
  switch (action.type) {
    case UI_ACTIONS.TOGGLE_RESPONSIVE_NAV:
      return {
        ...state,
        openResponsiveNav: !state.openResponsiveNav
      };
    case LOCATION_CHANGE:
    case UI_ACTIONS.CLOSE_RESPONSIVE_NAV:
    case LOGIN_ACTIONS.LOGOUT:
      return {
        ...state,
        openResponsiveNav: false
      };
    case UI_ACTIONS.TOGGLE_COLLAPSE_SIDE_NAV:
      return {
        ...state,
        collapseSideNav: !state.collapseSideNav
      };
    case UI_ACTIONS.CLOSE_COLLAPSE_SIDE_NAV:
      return {
        ...state,
        collapseSideNav: false
      };
    case UI_ACTIONS.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;
