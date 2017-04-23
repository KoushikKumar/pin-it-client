import { IS_USER_AUTHENTICATED } from '../actions/types';

export default function(state={isUserAuthenticate:false}, action) {
    switch(action.type) {
        case IS_USER_AUTHENTICATED:
            return action.payload;
    }
    return state;
}