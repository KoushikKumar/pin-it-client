import { combineReducers } from 'redux';
import authReducer from './auth';
import imagesReducer from './images';
import userReducer from './user';

const rootReducer = combineReducers({
  auth:authReducer,
  images:imagesReducer,
  user: userReducer
});

export default rootReducer;
