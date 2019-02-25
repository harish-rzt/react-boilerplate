import {ADD_COUNTER,SUB_COUNTER} from '../constants/global.constants'

export function counterReducer(state=777,action){
    switch(action.type){
        case ADD_COUNTER:{
            return state+1;
        };break;
        case SUB_COUNTER:{
            return state-1;
        };break;
        default :return state;
    }
}