import React from 'react';
import { object } from 'prop-types';
import './user.css';

class UserCard extends React.Component {
  static propTypes ={
    user: object.isRequired
  }

  render() {
    let {
      user
    } = this.props;

    return(
      <div className={ `userBox priority-${user.priority}` }>
        <h2>{ user.name }</h2>
        <p>
          other details
        </p>
      </div>
    )
  }
}

export default UserCard;
