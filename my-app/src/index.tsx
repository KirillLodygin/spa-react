import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './app/redux/configureStore';
import { App } from './App';

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
