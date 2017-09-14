import React from 'react';
import { object } from 'prop-types';
import './user.css';

import Card from 'material-ui/Card'

// const UserCard = ({ user }) => (
class UserCard extends React.Component {
  static propTypes = {
  user: object.isRequired,
}
render() {
  const { user } = this.props;
  return(
  <Card className={ `userBox priority-${user.priority}` }>
    <div >
      <h2>{ user.name }</h2>
      <p className="age">
        { `age: ${user.age}` }
      </p>
      <p className="category">
        { `category: ${user.category}` }
      </p>
    </div>
  </Card>
  )
}
}

// UserCard.propTypes = {
//   user: object.isRequired,
// }

export default UserCard;
