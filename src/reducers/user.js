import { USER_DATA } from '../actions/types';

export default function(state={userData:null}, action) {
    switch(action.type) {
        case USER_DATA :
            return {...state, userData: action.payload}
    }
    return state;
}