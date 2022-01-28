import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
////import App from './App';
//import reportWebVitals from './reportWebVitals';
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
*/


import { createBrowserHistory } from 'history';

import * as Sentry from '@sentry/browser';
import 'semantic-ui-css/semantic.min.css';
import Root from './containers/Root';
import './index.css';
import './VariousFromMonT.css'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

Sentry.init({
    dsn: 'https://5ae855d4c1d840c1b06679123069574f@sentry.io/1335198'
});

const store = configureStore();
const history = createBrowserHistory();
ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);

registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}
