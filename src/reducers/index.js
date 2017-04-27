import { combineReducers } from 'redux';
import authReducer from './auth';
import imagesReducer from './images';

const rootReducer = combineReducers({
  auth:authReducer,
  images:imagesReducer
});

export default rootReducer;
