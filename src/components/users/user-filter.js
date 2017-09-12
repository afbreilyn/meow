import React from 'react';
import { string, func } from 'prop-types';

class UserFilter extends React.Component {
  static proTypes={
    string: string.isRequired,
    onclick: func,
    currentFilterString: string
  }

  render() {
    let {
      string,
      onclick,
      currentFilterString
    } = this.props;

    if ( string == currentFilterString ) {
      return(
        <div onClick={ () => onclick('') }>
          { string }
        </div>
      )
    }

    return(
      <div onClick={ () => onclick(string) }>
        { string }
      </div>
    )
  }
}

export default UserFilter;

