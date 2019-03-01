import {modifyReducer} from './modifyReducers';
import {createStore} from 'redux';
import createReducers from './createReducers';

export default function configureStore() {
    const store = createStore(createReducers(null));
    store.asyncReducers = {}
    return store
}

export function reConfigureStore(store,action,asyncReducers){
    const {injectReducer,removeReducer}=modifyReducer(store)
    if(action=='ADD')
        injectReducer(asyncReducers);
    if(action=='DELETE')
        removeReducer(asyncReducers);
    return store
}