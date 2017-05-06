import { combineReducers } from 'redux';
import authReducer from './auth';
import imagesReducer from './images';
import userReducer from './user';
import tabReducer from './tab';

const rootReducer = combineReducers({
  auth:authReducer,
  images:imagesReducer,
  user: userReducer,
  tab: tabReducer
});

export default rootReducer;
