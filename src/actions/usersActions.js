import * as types from './actionTypes';
import usersApi from '../api/UsersApi';

export function loadUsersSuccess(users) {
  return {
    type: types.LOAD_ALL_USERS,
    users
  };
}

export function filterUsers(str) {
  return {
    type: types.FILTER_USERS,
    str
  }
}

export function sortBy (sortKey, asc=true) {
  return {
    type: types.SORT_USERS,
    sortKey,
    asc
  }
}

export function getVIP() {
  return {
    type: types.GETVIP
  }
}

export function loadUsers() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return usersApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}
