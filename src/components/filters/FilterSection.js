import React from 'react';
import * as usersActions from '../../actions/usersActions';

import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton';

class FilterSection extends React.Component {
  render() {
    const {
      handleRadio,
      categories
    } = this.props;

    return(
      <div>
        <RadioButtonGroup
          onChange={ handleRadio }
          name="categories">
          { categories.map((cat, idx) =>
            <RadioButton
              key={ idx }
              value={ cat }
              label={ cat } />
          )}
          <RadioButton
            value={ '' }
            label={ 'Clear Filters' } />
        </RadioButtonGroup>
      </div>
    )
  }
}

export default FilterSection;

// const mapStateToProps = (state, ownProps) => {
//   if (state.users.users && state.users.users.length > 0) {
//     return {
//       categories: state.users.categories,
//     }
//   } else {
//     return {
//       categories: [],
//     }
//   }
// }


// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(usersActions, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FilterSection);
