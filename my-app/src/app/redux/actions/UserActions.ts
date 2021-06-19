export const actions = {
  loginRequest: () => (
    {
      type: 'LOGIN_REQUEST'
    } as const
  ),

  loginSuccess: (username: String) => (
    {
      type: 'LOGIN_SUCCESS',
      payload: username,
    } as const
  ),

  loginFail: () => (
    {
      type: 'LOGIN_FAIL',
      error: true,
      payload: new Error('Ошибка авторизации'),
    } as const
  )
};

export const handleLogin = (): (dispatch: any) => void => {
  return function(dispatch) {
    dispatch({
      type: 'LOGIN_REQUEST',
    });

    //eslint-disable-next-line no-undef
    // @ts-ignore
    VK.Auth.login((r: { session: { user: { first_name: any; }; }; }) => {
      if (r.session) {
        const username = r.session.user.first_name;

        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: username
        });
      } else {
        dispatch({
          type: 'LOGIN_FAIL',
          error: true,
          payload: new Error("Ошибка авторизации")
        });
      }
    }, 4);
  };
};
