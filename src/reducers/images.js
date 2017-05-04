import { ALL_IMAGES_DATA, MY_PINS, SAVED_PINS, USER_PINS } from '../actions/types';

export default function(state={imagesData:[], allImagesData:[]}, action) {
    let  { allImagesData } = state;
    switch(action.type) {
        case ALL_IMAGES_DATA:
            return {...state, imagesData:action.payload, allImagesData:action.payload}

        case MY_PINS:
            const userName_myPins = action.payload;
            let updatedImagesData_myPins = allImagesData.filter((image) => {
                return image["createdBy"] === userName_myPins;
            })
            return {...state, imagesData:updatedImagesData_myPins}
        
        case SAVED_PINS:
            const userName_savedPins = action.payload;
            let updatedImagesData_savedPins = allImagesData.filter((image) => {
                return image["pinnedBy"].indexOf(userName_savedPins) > -1;
            })
            return {...state, imagesData:updatedImagesData_savedPins}
        
        case USER_PINS:
            const createdByUser = action.payload;
            let updatedImagesData_userPins = allImagesData.filter((image) => {
                return image["createdBy"] === createdByUser;
            })
            return {...state, imagesData:updatedImagesData_userPins}
    }
    return state;
}