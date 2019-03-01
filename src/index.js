import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import App from './containers/App/App';
import './global.css';
import configureStore from './reducers/configureStore';
import {reConfigureStore} from './reducers/configureStore';
import {nameReducer} from './reducers/global.reducers';

const newReducer={name:nameReducer}
const history = createBrowserHistory();
const store=configureStore();
setTimeout(()=>{
  reConfigureStore(store,'ADD',newReducer);  //dynamically adding a reducer to store
}, 10000)
ReactDOM.render(

  <Provider store={store}>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </Provider>

  , document.getElementById('root'));