import { ALL_IMAGES_DATA, MY_PINS } from '../actions/types';

export default function(state={imagesData:[]}, action) {
    switch(action.type) {
        case ALL_IMAGES_DATA:
            return {...state, imagesData:action.payload}

        case MY_PINS:
            let  { imagesData } = state;
            const userName = action.payload;
            let updatedImagesData = imagesData.filter((image) => {
                return image["createdBy"] === userName;
            })
            return {...state, imagesData:updatedImagesData}
    }
    return state;
}