import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import buildStore from './store';
import App from './pages/Main';
import * as serviceWorker from './serviceWorker';
import './scss/app.scss';

const history = createBrowserHistory();
const store = buildStore(history, {});

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./pages/Main', () => {
    const newApp = require('./pages/Main').default;
    renderApp(newApp);
  });
}

renderApp(App);
serviceWorker.unregister();
