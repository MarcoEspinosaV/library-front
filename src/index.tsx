import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './sass/index.scss';

import App from './js/App';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('libraryApp')
  );
};

render();

if (module.hot) {
  module.hot.accept('./js/App.tsx', render);
}
