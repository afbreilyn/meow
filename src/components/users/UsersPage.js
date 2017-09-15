import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import * as usersActions from '../../actions/usersActions';

import UserCard from './user-card';
import FilterSection from '../filters/FilterSection';

import './user.css';

class UsersPage extends React.Component {
  componentWillMount() {
    this.props.actions.loadUsers();
  }


  render() {
    let {
      categories,
      filteredUsers,
      logged_in
    } = this.props;

    const handleRadio = (e, val) => {
      this.props.actions.filterUsers(val)
    }

    const sortBy = (field, asc) => {
      this.props.actions.sortBy(field, asc);
    }

    return !logged_in 
        ? <Redirect to='/login' />
        : <div className="userCardPage">
            <div className="text-center">
              <h1>User Page</h1>
            </div>
            <br />
            
            <FilterSection
              handleRadio={ handleRadio }
              categories={ categories }
              sortBy={ sortBy } />
            <br />

            <div className="userCardContainer">
              { filteredUsers.map((user) =>
                <UserCard
                  key={ user.name }
                  user={ user } />
              )}
            </div>
          </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state.users.users && state.users.users.length > 0) {
    return {
      users: state.users.users,
      filteredUsers: state.users.filteredUsers,
      categories: state.users.categories,
      filterString: state.users.filterString,
      logged_in: state.session.logged_in
    }
  } else {
    return {
      users: [],
      categories: [],
      filteredUsers: [],
      filterString: state.users.filterString,
      logged_in: state.session.logged_in
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(usersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
