import React from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { handleLogin } from '../../redux/actions/UserActions';
import { IUserState, IDispatchUserProps, IAppState } from '../../redux/types';

const UserContainer: React.FC<IUserState & IDispatchUserProps> = ({
  name,
  error,
  isFetching,
  handleLogin,
}) => {
  return (
    <User
      name={name}
      isFetching={isFetching}
      error={error}
      handleLogin={handleLogin}
    />
  );
};

const mapStateToProps = ({ user }: IAppState) => ({
  name: user.name,
  error: user.error,
  isFetching: user.isFetching,
});

const mapDispatchToProps = (dispatch: any) => ({
  handleLogin: () => dispatch(handleLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
