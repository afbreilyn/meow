import * as types from './actionTypes';
import SessionApi from '../api/SessionApi';
import auth from '../auth/authenticator';

export function loginSuccess(isLoginSuccess) {
  return {
    type: types.LOG_IN_SUCCESS,
    isLoginSuccess
  }
}

export function loginError(loginError) {
  return {
    type: types.LOGIN_ERROR,
    loginError
  };
}

export function loginPending(loginPending) {
  return {
    type: types.LOGIN_PENDING,
    loginPending
  };
}


export function loginUser(credentials) {
  return function(dispatch) {
    dispatch(loginError({})); // clears errors
    dispatch(loginPending(true)); // starts loginpending state

    return SessionApi.login(credentials, response => {
      if (!response.error) {
        sessionStorage.setItem('jwt', response.jwt); 
        dispatch(loginSuccess(true));
        dispatch(loginPending(false));
      } else {
        dispatch(loginError(response.error));
        dispatch(loginSuccess(false));
        dispatch(loginPending(false));
      }
    })
  }
}

export function logOutUser() {
  auth.logOut();
  return {type: types.LOG_OUT}
}
