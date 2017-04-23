import { IS_USER_AUTHENTICATED } from '../actions/types';

export default function(state={isUserAuthenticated:false}, action) {
    switch(action.type) {
        case IS_USER_AUTHENTICATED:
            return {...state, isUserAuthenticated:action.payload}
    }
    return state;
}