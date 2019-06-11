import { AnyAction } from 'redux';
import { LOADER_ACTIONS } from '../actions';

export interface ILoaderReducer {
  loader: string[];
}

const loaderReducerState: ILoaderReducer = {
  loader: []
};

const loaderReducer = (state: ILoaderReducer = loaderReducerState, action: AnyAction): ILoaderReducer => {
  switch (action.type) {
    case LOADER_ACTIONS.ADD_LOADER_ITEM:
      const newLoader = [...state.loader];
      newLoader.push(action.payload);
      return {
        ...state,
        loader: newLoader
      };
    case LOADER_ACTIONS.REMOVE_LOADER_ITEM:
      const newNotificationRemove = [...state.loader.filter(item => item !== action.payload)];
      return {
        ...state,
        loader: newNotificationRemove
      };
    default:
      return state;
  }
};

export default loaderReducer;
