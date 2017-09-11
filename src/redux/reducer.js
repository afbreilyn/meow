const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

function setLoginPending(isLoginPending) {
  return {
    type: LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: LOGIN_ERROR,
    loginError
  };
}

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  }
}


function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === 'meow@meow.com' && password === 'meowmeow') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and/or password'));
    }
  }, 1000);
}

export default function reducer(state = {
  isLoginPending: false,
  isLoginSuccess: false,
  loginError: null
}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { 
        ...state,
        isLoginSuccess: action.isLoginSuccess
      };

    case LOGIN_PENDING:
      return { 
        ...state,
        isLoginPending: action.isLoginPending
      };

    case LOGIN_ERROR:
      return { 
        ...state,
        loginError: action.loginError
      };

    default: 
      return state;
  }
}


