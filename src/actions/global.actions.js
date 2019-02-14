import {
    ADD_COUNTER,
    SUB_COUNTER,
    SAGA_ADD_COUNTER,
    SAGA_SUB_COUNTER,
} from '../constants/global.constants';

export const addCounter = () => ({ type: ADD_COUNTER });
export const subCounter = () => ({ type: SUB_COUNTER });
export const sagaAddCounter = () => ({ type: SAGA_ADD_COUNTER });
export const sagaSubCounter = () => ({ type: SAGA_SUB_COUNTER });