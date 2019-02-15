import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './global.css';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { counterReducer } from './reducers/global.reducers';
import rootSaga from './sagas/global.sagas';
import { BrowserRouter } from 'react-router-dom';
const reducer = combineReducers({ counter: counterReducer });
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, compose(applyMiddleware(sagaMiddleWare), window.devToolsExtension ? window.devToolsExtension() : f => f));
//const store = createStore(reducer,compose( window.devToolsExtension ? window.devToolsExtension() : f => f));
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));