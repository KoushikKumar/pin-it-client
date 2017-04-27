import { ALL_IMAGES_DATA } from '../actions/types';

export default function(state={imagesData:[]}, action) {
    switch(action.type) {
        case ALL_IMAGES_DATA:
            return {...state, imagesData:action.payload}
    }
    return state;
}