import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { appConfigRoutes } from './routes';

import rootReducer from '../js/reducers/rootReducer';
import configStore, { history } from './configStore/configStore';

const { store, persistor } = configStore();

class App extends React.Component<any, { name: string }> {
  public render() {
    const appRoutes = appConfigRoutes();
    const renderRoute = (routeData: any) => (
      <div className="width-100 height-100">
        <Switch location={routeData.location}>
            {appRoutes.map(route => (
                <Route
                    key={route.path}
                    path={`${route.path}${route.pathParams ? '/' + route.pathParams : ''}`}
                    exact={true}
                    component={route.component}
                />
            ))}
        </Switch>
      </div>
    );
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ConnectedRouter history={history}>
            <Route render={renderRoute} />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}
export default hot(App);

if (module.hot) {
  module.hot.accept('./reducers/rootReducer.ts', () => {
    store.replaceReducer(rootReducer(createBrowserHistory()));
  });
}
