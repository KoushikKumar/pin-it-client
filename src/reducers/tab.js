import { TAB_NAME } from '../actions/types';

export default function(state={tabName:""}, action) {
    switch (action.type) {
        case TAB_NAME:
           return {...state, tabName: action.payload}
    }
    return state;
}