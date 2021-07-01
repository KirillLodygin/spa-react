import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../App';
import configureStore from '../app/redux/configureStore';

describe('App', () => {
  it('renders App component', () => {
    render(<App store={configureStore()} />);
    expect(screen.getAllByRole('button').length === 6);
  });
});
