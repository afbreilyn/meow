import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersActions from '../../actions/usersActions';

import UserCard from './user-card';

class UsersPage extends React.Component {
  componentWillMount() {
    this.props.actions.loadUsers();
  }

  render() {
    let { users } = this.props;

    return(
      <div>
        this is the users page
        <br />
        it shouldn`t show up unless logged in!
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
      users: state.users.users
    }
  } else {
    return {
      users: []
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(usersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);


