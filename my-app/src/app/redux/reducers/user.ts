import { IUserState, UserActionsTypes } from '../types';
import { Reducer } from 'redux';

const initialState = {
  name: '',
  error: '',
  isFetching: false,
};

export const userReducer: Reducer<IUserState, UserActionsTypes> = (
  state = initialState,
  action,
): IUserState => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, isFetching: true, error: '' };

    case 'LOGIN_SUCCESS':
      return { ...state, isFetching: false, name: action.payload };

    case 'LOGIN_FAIL':
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
};
