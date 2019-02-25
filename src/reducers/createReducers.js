import {combineReducers} from 'redux';
import { counterReducer } from './global.reducers';

const staticReducers={
    counter: counterReducer
}
export default function createReducers(asyncReducers) {
    return combineReducers({
      ...staticReducers,
      ...asyncReducers
    })
  }