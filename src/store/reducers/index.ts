import { combineReducers } from 'redux';
import { RootState } from './state';
import { userReducer } from './user';

export const rootReducer = combineReducers({
  users : userReducer
});
