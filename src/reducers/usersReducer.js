import * as types from '../actions/actionTypes';
import initialState from './initialState';


export function filterInReducer (data, filterString) {
  return filterString !== ''
    ? data.filter( data => data.category === filterString)
    : data
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
        categories: action.users.map(user => user.category).filter((category, idx, self) => self.indexOf(category) === idx)
        // maps all the categories of the users, then makes them unique
      };
    case types.FILTER_USERS:
      return {
        ...state,
        users: filterInReducer(state.users, action.str),
        filterString: action.str.toLowerCase()
      }
    // case types.SORT_USERS:
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