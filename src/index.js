import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './client/reducers';

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(reducers);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();