import React from 'react';

import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton';

class FilterSection extends React.Component {
  render() {
    const {
      handleRadio,
      categories,
      sortBy
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

        <div onClick={ () => sortBy('age') }>
          sort by age
        </div>

        <div onClick={ () => sortBy('name') }>
          sort by name
        </div>
      </div>
    )
  }
}

export default FilterSection;
