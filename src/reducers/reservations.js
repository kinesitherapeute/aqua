import {RESERVATION_ADD, RESERVATION_REMOVE} from '../actions/constants';

function reservationsReducer(state = [], action){
    const {type, payload} = action;
    switch(type){
        case RESERVATION_ADD:
            return [...state, payload];
        break;
        case RESERVATION_REMOVE:
            const removeIdx = state.findIndex(r => r.id === payload);
            //state.¨reduce(combine: fn(sum: ?, elt: ?, i: number), init?: ?)
            return [...state.slice(0,removeIdx), ...state.slice(removeIdx+1)]
        break;
    }
    return state;
}
