import React from 'react';
import User from '../containers/UserContainer';
import Page from '../containers/PageContainer';

export const AppContainer: React.FC = () => {
  return (
    <div className="app">
      <Page />
      <User />
    </div>
  );
};
