import {modifyReducer} from './modifyReducers';
import {createStore} from 'redux';
import createReducers from './createReducers';

export default function configureStore() {
    const store = createStore(createReducers(null));
    store.asyncReducers = {}
    return store
}

export function reConfigureStore(store){
    const {injectReducer,removeReducer}=modifyReducer(store)
    if(action=='ADD')
        injectReducer(store, asyncReducers);
    if(action=='DELETE')
        removeReducer(store, asyncReducers);
    return store
}