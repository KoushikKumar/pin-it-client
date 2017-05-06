import { GENERATE_TOKEN_URI, 
         GET_OAUTH_TOKEN, 
         FETCH_ALL_IMAGES_URI, 
         DELETE_IMAGE_BY_ID_URI,
         SAVE_IMAGE_URI,
         UNSAVE_IMAGE_URI,
         ADD_IMAGE_URI } from './uris';
import axios from 'axios';
import { PIN_IT_TOKEN_KEY, OAUTH_TOKEN, OAUTH_TOKEN_SECRET } from '../constants/pin-it-constants';
import { IS_USER_AUTHENTICATED, 
         ALL_IMAGES_DATA, 
         USER_DATA, MY_PINS, 
         SAVED_PINS, 
         USER_PINS,
         DELETE_IMAGE,
         SAVE_IMAGE,
         UNSAVE_IMAGE,
         TAB_NAME,
         ADD_IMAGE } from './types';

export function logIn() {
    return function(dispatch) {
        window.open(GENERATE_TOKEN_URI, "_blank", 'width=600,height=600');
        axios.get(GET_OAUTH_TOKEN)
            .then(response => {
                dispatch({ type:IS_USER_AUTHENTICATED, payload:true });
                dispatch({ type:USER_DATA, payload: response.data });
                localStorage.setItem(PIN_IT_TOKEN_KEY,JSON.stringify(response.data));
                dispatchAllImagesData(dispatch);
            })
            .catch(() => {
                localStorage.removeItem(PIN_IT_TOKEN_KEY);
                dispatch({ type:IS_USER_AUTHENTICATED, payload:false });
                dispatch({ type:USER_DATA, payload: null });
            })
    }
}

export function logOut() {
    return function(dispatch) {
        localStorage.removeItem(PIN_IT_TOKEN_KEY);
        dispatch({ type:IS_USER_AUTHENTICATED, payload:false });
        dispatch({ type:USER_DATA, payload: null });
        dispatchAllImagesData(dispatch);
    }
}

export function fetchAllImages() {
    return function(dispatch) {
        dispatchAllImagesData(dispatch);
    }
}

export function myPinsButtonClicked(userName) {
    return {
        type: MY_PINS,
        payload: userName
    }
}

export function savedPinsButtonClicked(userName) {
    return {
        type: SAVED_PINS,
        payload: userName
    }
}

export function userButtonClicked(createdBy) {
    return {
        type: USER_PINS,
        payload: createdBy
    }
}

function dispatchAllImagesData(dispatch) {
     axios.get(FETCH_ALL_IMAGES_URI)
        .then(response => {
            dispatch({type:ALL_IMAGES_DATA, payload: response.data })
        })
}

export function deleteImage(imageId) {
    const tokenData = JSON.parse(localStorage.getItem(PIN_IT_TOKEN_KEY));
    const DELETE_URI = `${DELETE_IMAGE_BY_ID_URI}/${imageId}?${OAUTH_TOKEN}=${tokenData[OAUTH_TOKEN]}&${OAUTH_TOKEN_SECRET}=${tokenData[OAUTH_TOKEN_SECRET]}`;
    return function(dispatch) {
        axios.delete(DELETE_URI)
                .then(response => {
                    dispatch({type:DELETE_IMAGE, payload:imageId})
                });
    }
}

export function saveImage(imageId, userName) {
    //TODO LIKE BELOW
    // axios.post(SAVE_IMAGE_URI, {imageId, userName})
    //         .then(response => {
    //             dispatch({type:SAVE_IMAGE, payload:{imageId, userName}})
    //         })

    return {type:SAVE_IMAGE, payload:{imageId, userName}};
}

export function unSaveImage(imageId, userName, tabName) {
    //TODO LIKE BELOW
    // axios.post(UNSAVE_IMAGE_URI, {imageId, userName})
    //         .then(response => {
    //             dispatch({type:UNSAVE_IMAGE, payload:{imageId, userName, tabName}})
    //         })

    return {type:UNSAVE_IMAGE, payload:{imageId, userName, tabName}};
}

export function tab(tabName) {
    return {
        type:TAB_NAME,
        payload:tabName
    }
}

export function addImageUrl(imageUrl, createdBy, tabName) {
    const tokenData = JSON.parse(localStorage.getItem(PIN_IT_TOKEN_KEY));
    const URI = `${ADD_IMAGE_URI}?${OAUTH_TOKEN}=${tokenData[OAUTH_TOKEN]}&${OAUTH_TOKEN_SECRET}=${tokenData[OAUTH_TOKEN_SECRET]}`;
    return function(dispatch) {
        axios.post(URI, {imageUrl, createdBy, pinnedBy:[]})
            .then(response => {
                dispatch({type:ADD_IMAGE, payload:{...response.data, tabName}})
            })
    }
}