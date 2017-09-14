import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersActions from '../../actions/usersActions';

import './user.css';

import UserCard from './user-card';
import UserFilter from './user-filter';

import FilterSection from '../filters/FilterSection';

import {RadioButtonGroup} from 'material-ui/RadioButton';

class UsersPage extends React.Component {
  componentWillMount() {
    this.props.actions.loadUsers();
  }

  render() {
    let {
      users,
      categories,
      // filterString
    } = this.props;


    const handleRadio = (e, val) => {
      this.props.actions.filterUsers(val)
    }

    return(
      <div className="userCardPage">
        <div className="text-center">
          <h1>User Page</h1>
        </div>
        <br />
        
        <FilterSection
          handleRadio={ handleRadio }
          categories={ categories } />
        <br />

        <div className="userCardContainer">
          { users.map((user, index) =>
            <UserCard
              key={ index }
              user={ user } />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state.users.users && state.users.users.length > 0) {
    return {
      users: state.users.users,
      categories: state.users.categories,
      filterString: state.users.filterString
    }
  } else {
    return {
      users: [],
      categories: [],
      filterString: state.users.filterString
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(usersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
