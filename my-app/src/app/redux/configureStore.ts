import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createRootReducer } from './reducers';

import { IAppState } from './types';

export default function configureStore(): Store<IAppState> {
  return createStore(
    createRootReducer(),
    composeWithDevTools(applyMiddleware(logger, thunk)),
  );
}
