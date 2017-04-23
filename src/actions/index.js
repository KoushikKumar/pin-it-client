import { GENERATE_TOKEN_URI, GET_OAUTH_TOKEN } from './uris';
import axios from 'axios';
import { PIN_IT_TOKEN_KEY } from '../constants/pin-it-constants';
import { IS_USER_AUTHENTICATED } from './types';

export function logIn() {
    return function(dispatch) {
        window.open(GENERATE_TOKEN_URI, "_blank", 'width=600,height=600');
        axios.get(GET_OAUTH_TOKEN)
            .then(response => {
                dispatch({ type:IS_USER_AUTHENTICATED, payload:true });
                localStorage.setItem(PIN_IT_TOKEN_KEY,JSON.stringify(response.data));
            })
            .catch(() => {
                localStorage.removeItem(PIN_IT_TOKEN_KEY);
                dispatch({ type:IS_USER_AUTHENTICATED, payload:false });
            })
    }
}

export function logOut() {
    localStorage.removeItem(PIN_IT_TOKEN_KEY);
    return {
        type:IS_USER_AUTHENTICATED,
        payload:false
    }
}