import {combineReducers} from 'redux';  

import session from './sessionReducer';
import users from './usersReducer';

const rootReducer = combineReducers({
  users,
  session
});

export default rootReducer;  
