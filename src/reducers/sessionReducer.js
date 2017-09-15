import * as types from '../actions/actionTypes';  
import initialState from './initialState';  

export default function sessionReducer(state = initialState, action) {  
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      window.location.replace('/users');
      return { 
        ...state,
        logged_in: !!sessionStorage.jwt
      }
    case types.LOG_OUT:
      window.location.replace('/');
      return { 
        ...state,
        logged_in: !!sessionStorage.jwt
      }
    case types.LOGIN_ERROR:
      return { 
        ...state,
        loginErrorMessage: action.loginError.loginErrorMessage,
        loginEmailError: action.loginError.loginEmailError,
        loginPasswordError: action.loginError.loginPasswordError
      };
    case types.LOGIN_PENDING:
      return { 
        ...state,
        isLoginPending: action.loginPending
      };
    default: 
      return state;
  }
}
