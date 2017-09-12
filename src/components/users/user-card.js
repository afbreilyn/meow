import React from 'react';
import { object } from 'prop-types';
import './user.css';

const UserCard = ({ user }) => (
  <div className={ `userBox priority-${user.priority}` }>
    <h2>{ user.name }</h2>
    <p className="age">
      { `age: ${user.age}` }
    </p>
    <p className="category">
      { `category: ${user.category}` }
    </p>
  </div>
)

UserCard.propTypes = {
  user: object.isRequired,
}

export default UserCard;
