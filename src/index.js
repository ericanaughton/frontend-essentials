import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import { createStore } from 'redux';
import rootReducer from './root-reducer';

//import './styles.css'; this is how you import styles
const rootElement = document.getElementById('root');
const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
