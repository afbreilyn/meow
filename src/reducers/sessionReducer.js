import * as types from '../actions/actionTypes';  
import initialState from './initialState';  
import {browserHistory} from 'react-router';

export default function sessionReducer(state = initialState, action) {  
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      browserHistory.push('/users')
      return { 
        ...state,
        logged_in: !!sessionStorage.jwt
      }
    case types.LOG_OUT:
      browserHistory.push('/')
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