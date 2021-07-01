import React from 'react';
import { render, screen } from '@testing-library/react';
import { User } from '../app/view/components/User';
import { handleLogin } from '../app/redux/actions/UserActions';

describe('User', () => {
  it('User not loaded', () => {
    render(
      <User
        error={''}
        name={''}
        isFetching={false}
        handleLogin={() => handleLogin}
      />,
    );
    expect(screen.getByText('Войти')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('User loading', () => {
    render(
      <User
        error={''}
        name={''}
        isFetching={true}
        handleLogin={() => handleLogin}
      />,
    );
    expect(screen.getByText(/Загружаю.../)).toBeInTheDocument();
    expect(screen.queryByText(/Войти/)).toBeNull();
  });

  it('User loaded', () => {
    render(
      <User
        error={''}
        name={'Василий'}
        isFetching={false}
        handleLogin={() => handleLogin}
      />,
    );
    expect(screen.getByText(/Привет, Василий!/)).toBeInTheDocument();
    expect(screen.queryByText(/Войти/)).toBeNull();
    expect(screen.queryByText(/Загружаю.../)).toBeNull();
  });

  it('User not loaded', () => {
    render(
      <User
        error={'X'}
        name={''}
        isFetching={false}
        handleLogin={() => handleLogin}
      />,
    );
    expect(
      screen.getByText('Во время запроса произошла ошибка, обновите страницу'),
    ).toBeInTheDocument();
    expect(screen.queryByText(/Войти/)).toBeNull();
    expect(screen.queryByText(/Загружаю.../)).toBeNull();
  });
});
