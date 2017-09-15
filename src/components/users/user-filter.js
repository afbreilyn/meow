import React from 'react';
import { string, func } from 'prop-types';

import {RadioButton} from 'material-ui/RadioButton';

class UserFilter extends React.Component {
  static proTypes={
    string: string.isRequired,
    onclick: func,
    currentFilterString: string
  }

  render() {
    let {
      string
    } = this.props;

    return(
      <RadioButton
        value={ string }
        label={ string } />
    )
  }
}

export default UserFilter;
