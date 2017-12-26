import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas/sagas';

import './index.scss';
import App from './components/App';
import allReducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySaga);

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
