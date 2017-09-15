import React from 'react';
import { object } from 'prop-types';
import './user.css';

import Card from 'material-ui/Card'

const UserCard = ({ user }) => (
  <Card className={ `userBox priority-${user.priority}` }>
    <div>
      <h2 className="name">
        { user.name }
      </h2>
      <p className="age">
        { `age: ${user.age}` }
      </p>
      <p className="category">
        { `category: ${user.category}` }
      </p>
    </div>
  </Card>
)

UserCard.propTypes = {
  user: object.isRequired,
}

export default UserCard;
