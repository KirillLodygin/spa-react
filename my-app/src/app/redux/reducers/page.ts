import { IPageState, PageActionsTypes } from '../types';
import { Reducer } from 'redux';

const initialState = {
  year: 0,
  photos: [],
  isFetching: false,
  error: '',
};

export const pageReducer: Reducer<IPageState, PageActionsTypes> = (
  state = initialState,
  action,
): IPageState => {
  switch (action.type) {
    case 'GET_PHOTOS_REQUEST':
      return { ...state, year: action.payload, isFetching: true, error: '' };

    case 'GET_PHOTOS_SUCCESS':
      return { ...state, photos: action.payload, isFetching: false, error: '' };

    case 'GET_PHOTOS_FAIL':
      return { ...state, error: action.payload.message, isFetching: false };

    default:
      return state;
  }
};
