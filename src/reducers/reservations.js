import {RESERVATION_ADD, RESERVATION_REMOVE} from '../actions/constants';

const DEFAULT_RESERVATION = [{title: 'test',
begin: new Date(),
end: new Date(),
description: 'Test desc ....'
}, {title: 'test2',
begin: new Date(),
end: new Date(),
description: 'Test 2 desc ....'
}];
export default function reservationsReducer(state = DEFAULT_RESERVATION, action){
    const {type, payload} = action;
    switch(type){
        case RESERVATION_ADD:
        return [...state, payload];
        break;
        case RESERVATION_REMOVE:
        const removeIdx = state.findIndex(r => r.id === payload);
        return [...state.slice(0,removeIdx), ...state.slice(removeIdx+1)]
        break;
    }
    return state;
}
