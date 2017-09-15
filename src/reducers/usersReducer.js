import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function filterInReducer( data, filterString, sortKey, asc, vipOnly ) {
  let filtered = filterString !== ''
    ? data.filter( data => data.category === filterString)
    : data
  if (sortKey) {
    filtered = sortFiltered( filtered, sortKey, asc )
  }
  if (vipOnly) {
    filtered = filterNonVIPs( filtered );
  }
  return filtered;
}

export function sortFiltered( data, field, asc ) {
  data = data.slice(0);
  return data.sort((item1, item2) => {
    if (typeof item1[field] === 'string') {
      return (item1[field].localeCompare(item2[field])) * ( asc ? 1 : -1 )
    } else {
      return (item1[field] - item2[field]) * ( asc ? 1 : -1 )
    }
  })
}

export function filterNonVIPs( data ) {
  return data.filter( data => [1,2].includes(data.priority) )
}


export default function userReducer(state = initialState.users, action) {
  switch(action.type) {
    case types.LOAD_ALL_USERS:
     return { 
        ...state,
        users: action.users,
        filteredUsers: action.users,
        categories: action.users.map(user => user.category).filter((category, idx, self) => self.indexOf(category) === idx), // maps all the categories of the users, then makes them unique
        sortKey: 'featured',
        vipOnly: false
      };

    case types.FILTER_USERS:
      return {
        ...state,
        filteredUsers: filterInReducer(state.users, action.str, state.sortKey, state.asc, state.vipOnly),
        filterString: action.str.toLowerCase()
      }

    case types.SORT_USERS:
      const { sortKey, asc } = action;
      let sorted = sortKey === 'featured'
        ? filterInReducer(state.users, state.filterString) // just undoes the sort
        : sortFiltered( state.filteredUsers, sortKey, asc );
      return {
        ...state,
        filteredUsers: sorted,
        sortKey: sortKey,
        asc: asc,
        vipOnly: false // since we're sorting by something else, we aren't sorting by VIP!

        // asc: sortKey === state.sortKey ? !state.asc : true // <- leaving in cause this might be fun to play around with later
      }

    case types.GETVIP:
      return {
        ...state,
        filteredUsers: filterNonVIPs(state.filteredUsers),
        sortKey: 'VIP',
        vipOnly: true
      }

    default: 
      return state;
  }
}
