import { ALL_IMAGES_DATA, 
         MY_PINS, 
         SAVED_PINS, 
         USER_PINS, 
         DELETE_IMAGE,
         SAVE_IMAGE,
         UNSAVE_IMAGE,
         ADD_IMAGE } from '../actions/types';
import { MY_PINS_TAB, SAVED_PINS_TAB, VIEW_ALL_TAB } from '../constants/pin-it-constants';

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

        case DELETE_IMAGE:
            let updatedAllImagesData_deletePin = state.allImagesData.filter((image) => {
                return image["_id"] !== action.payload;
            })

            let updatedImagesData_deletePin = state.imagesData.filter((image) => {
                return image["_id"] !== action.payload;
            })
            return {...state, imagesData:updatedImagesData_deletePin, allImagesData:updatedAllImagesData_deletePin}

        case SAVE_IMAGE:
            let updatedAllImagesData_saveImage = state.allImagesData.map((image) => {
                if(image["_id"] == action.payload.imageId) {
                    image["pinnedBy"] = [...image["pinnedBy"], action.payload.userName]
                }
                return image;
            });

            let updatedImagesData_saveImage = state.imagesData.map((image) => {
                if(image["_id"] == action.payload.imageId) {
                    image["pinnedBy"] = [...image["pinnedBy"], action.payload.userName]
                }
                return image;
            });

            return {...state, imagesData:updatedImagesData_saveImage, allImagesData:updatedAllImagesData_saveImage}

        case UNSAVE_IMAGE:
            let updatedAllImagesData_unsaveImage = state.allImagesData.map((image) => {
                if(image["_id"] == action.payload.imageId) {
                    image["pinnedBy"] = image["pinnedBy"].filter((user) => {
                        return user!== action.payload.userName
                    });
                }
                return image;
            });

            let updatedImagesData_unsaveImage = [];

            if(SAVED_PINS_TAB !== action.payload.tabName) {
                updatedImagesData_unsaveImage = state.imagesData.map((image) => {
                    if(image["_id"] == action.payload.imageId) {
                        image["pinnedBy"] = image["pinnedBy"].filter((user) => {
                            return user!== action.payload.userName
                        });
                    }
                    return image;
                });
            } else {
                updatedImagesData_unsaveImage = state.imagesData.filter((image) => {
                    return image["_id"] !== action.payload.imageId; 
                });
            }

            return {...state, imagesData:updatedImagesData_unsaveImage, allImagesData:updatedAllImagesData_unsaveImage}

        case ADD_IMAGE:
            let updatedAllImagesData_addImage = [action.payload, ...state.allImagesData];
            let updatedImagesData_addImage = state.imagesData;
            if(SAVED_PINS_TAB !== action.payload.tabName) {
                updatedImagesData_addImage = [action.payload, ...updatedImagesData_addImage];
            }
            return {...state, imagesData:updatedImagesData_addImage, allImagesData:updatedAllImagesData_addImage}
    }
    return state;
}