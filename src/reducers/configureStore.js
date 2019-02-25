import {modifyReducer} from './modifyReducers';
import {createStore} from 'redux';
import createReducers from './createReducers';

export default function configureStore(initialState,action,asyncReducers) {
    const store = createStore(createReducers(), initialState);
    store.asyncReducers = {}
    return store
}

export function reConfigureStore(store){
    const {injectReducer,removeReducer}=modifyReducer(store)
    if(action=='ADD')
        injectReducer(asyncReducers);
    if(action=='DELETE')
        removeReducer(asyncReducers);
    return store
}