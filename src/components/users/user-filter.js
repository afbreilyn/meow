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
      string,
      // onclick,
      // currentFilterString
    } = this.props;

    return(
      <RadioButton
        value={ string }
        label={ string } />
    )

    // if ( string == currentFilterString ) {
    //   return(
    //     <div onClick={ () => onclick('') }>
    //       { string }
    //     </div>
    //   )
    // }

    // return(
    //   <div onClick={ () => onclick(string) }>
    //     { string }
    //   </div>
    // )
  }
}

export default UserFilter;

