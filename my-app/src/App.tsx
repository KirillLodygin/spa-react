import React from 'react';
import { Provider } from 'react-redux';
import { IStoreState } from './app/redux/types';
import { AppContainer } from './app/view/components/AppComponent';

import './App.css';

export const App: React.FC<IStoreState> = ({ store }) => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
