import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './containers/App/App';
import './global.css';
import configureStore from './reducers/configureStore';

const store=configureStore();

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  , document.getElementById('root'));