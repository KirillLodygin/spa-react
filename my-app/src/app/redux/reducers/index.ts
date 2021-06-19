import { combineReducers } from 'redux';
import { userReducer } from './user';
import { pageReducer } from './page';

export const createRootReducer = () =>
  combineReducers({
    user: userReducer,
    page: pageReducer,
  });
