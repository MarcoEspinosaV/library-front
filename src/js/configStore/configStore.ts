import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootEpics from '../epics/rootEpic';
import rootReducer from '../reducers/rootReducer';

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();
const middlewareForRouter = routerMiddleware(history);

const config: any = {
  key: 'root',
  storage,
  whitelist: ['accountReducer', 'uiReducer']
};

const reducer = persistReducer(config, rootReducer(history));

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    reducer,
    composeEnhancer(
      applyMiddleware(

      )
    )
  );
  epicMiddleware.run(rootEpics);
  const persistor = persistStore(store);
  return { store, persistor };
};
