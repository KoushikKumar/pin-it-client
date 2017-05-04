import { GENERATE_TOKEN_URI, GET_OAUTH_TOKEN, FETCH_ALL_IMAGES_URI } from './uris';
import axios from 'axios';
import { PIN_IT_TOKEN_KEY } from '../constants/pin-it-constants';
import { IS_USER_AUTHENTICATED, ALL_IMAGES_DATA, USER_DATA, MY_PINS, SAVED_PINS, USER_PINS } from './types';

export function logIn() {
    return function(dispatch) {
        window.open(GENERATE_TOKEN_URI, "_blank", 'width=600,height=600');
        axios.get(GET_OAUTH_TOKEN)
            .then(response => {
                dispatch({ type:IS_USER_AUTHENTICATED, payload:true });
                dispatch({ type:USER_DATA, payload: response.data });
                localStorage.setItem(PIN_IT_TOKEN_KEY,JSON.stringify(response.data));
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