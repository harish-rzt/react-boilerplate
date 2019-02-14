import {takeLatest, put, all} from 'redux-saga/effects';
//import {addCounter} from '../actions/globalActionCreator';

export function* addCount(){
    yield put({type:'ADD_COUNTER'});
}

export function* subCount(){
    yield put({type:'SUB_COUNTER'});
}

export function* watcher(){
    yield takeLatest('SAGA_ADD_COUNTER',addCount);
    yield takeLatest('SAGA_SUB_COUNTER',subCount);
}
export default function* rootSaga(){
    yield all([
        watcher()
    ])
}