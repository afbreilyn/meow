import * as types from '../actions/actionTypes';
import initialState from './initialState';


export function filterInReducer (data, filterString, sortKey, asc) {
  let filtered = filterString !== ''
    ? data.filter( data => data.category === filterString)
    : data

  if (sortKey) {
    filtered = sortFiltered( filtered, sortKey, asc )
  }

  return filtered;
}


export function sortFiltered( data, field, asc ) {
  // console.log(data, field, asc);
  data = data.slice(0);

  return data.sort((item1, item2) => {
    if (typeof item1[field] == 'string') {
      return (item1[field].localeCompare(item2[field])) * ( asc ? 1 : -1 )
    } else {
      return (item1[field] - item2[field]) * ( asc ? 1 : -1 )
    }
  })

}

// export function sort (data, sortKey, sortDesc) {
//   const multiplier = sortDesc ? -1 : 1
//   return data.sort((a, b) => {
//     const aVal = a[sortKey] || 0
//     const bVal = b[sortKey] || 0
//     return aVal > bVal ? multiplier : (aVal < bVal ? -multiplier : 0)
//   })
// }

export default function userReducer(state = initialState.users, action) {
  switch(action.type) {
    case types.LOAD_ALL_USERS:
     return { 
        ...state,
        users: action.users,
        filteredUsers: action.users,
        categories: action.users.map(user => user.category).filter((category, idx, self) => self.indexOf(category) === idx),
        asc: true
        // maps all the categories of the users, then makes them unique
      };
    case types.FILTER_USERS:
      return {
        ...state,
        // users: filterInReducer(state.users, action.str),
        filteredUsers: filterInReducer(state.users, action.str, state.sortKey, state.asc),
        filterString: action.str.toLowerCase()
      }

    case types.SORT_USERS:
      const { sortKey } = action;
      // console.log(sortKey, asc);
      const sorted = sortFiltered( state.filteredUsers, sortKey, state.asc )
      // console.log( "sorted it: ", sorted )
      return {
        ...state,
        filteredUsers: sorted,
        sortKey: sortKey,
        asc: sortKey == state.sortKey ? !state.asc : true
      }
      

    //   const sortKey = action.sortKey
    //   const sortDesc = state.sortKey === action.sortKey ? !state.sortDesc : false
    //   const sorted = sort(state.allData, sortKey, sortDesc)

    //   return {
    //     ...
    //     sortKey,
    //     sortDesc,
    //     // allData: sorted,
    //     data: filter(sorted, state.filterString)
    //   }
    default: 
      return state;
  }
}