import React from 'react';
import { handleLogin } from '../../redux/actions/UserActions';

export type UserProps = {
  name: string,
  error: string,
  isFetching: boolean,
  handleLogin: typeof handleLogin,
};

export const User: React.FC<UserProps> = ({
  name,
  error,
  isFetching,
  handleLogin,
}) => {
  const renderTemplate = () => {
    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>;
    }

    if (isFetching) {
      return <p>Загружаю...</p>;
    }

    if (name) {
      return <p>Привет, {name}!</p>;
    } else {
      return (
        <button className="btn" onClick={handleLogin}>
          Войти
        </button>
      );
    }
  };

  return <div className="ib user">{renderTemplate()}</div>;
};
