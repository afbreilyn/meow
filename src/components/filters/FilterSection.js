import React from 'react';

import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton';
import { DropDownMenu } from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import Card from 'material-ui/Card'

import './filter.css'

class FilterSection extends React.Component {
  state = {
    value: 'featured'
  };

  handleChange = (value, asc=true, alias=null) => {
    const { sortByFunc } = this.props;

    sortByFunc(value, asc, alias);

    this.setState({
      value: alias || value
    });
  }

  getVIP = () => {
    const { getVIPFunc } = this.props;

    getVIPFunc('meow');

    this.setState({
      value: 'VIP'
    });
  }

  render() {
    const {
      handleRadio,
      categories
    } = this.props;

    return(
      <Card className="filterContainer">

        <h4 className="filterH4"> Checkout some filters! </h4>

        <DropDownMenu className="filterDropdown" value={ this.state.value }>
          <MenuItem value={ 'featured' } primaryText="Featured" onClick={ () => this.handleChange('featured') } />
          <MenuItem value={ 'age' } primaryText="Age" onClick={ () => this.handleChange('age') } />
          <MenuItem value={ 'nameAZ' } primaryText="A-Z" onClick={ () => this.handleChange('name', true, 'nameAZ') } />
          <MenuItem value={ 'nameZA' } primaryText="Z-A" onClick={ () => this.handleChange('name', false, 'nameZA') } />
          <MenuItem value={ 'VIP' } primaryText="VIP" onClick={ () => this.getVIP() } />
        </DropDownMenu>

        <RadioButtonGroup
          onChange={ handleRadio }
          name="categories"
          className="radioFilter">
          { categories.map((cat, idx) =>
            <RadioButton
              key={ idx }
              value={ cat }
              label={ cat } />
          )}
          <RadioButton
            value={ '' }
            label={ 'All Cats' } />
        </RadioButtonGroup>


        {/*
        <div onClick={ () => sortByFunc('age') }>
          sort by age
        </div>

        <div onClick={ () => sortByFunc('name') }>
          sort by name
        </div>
        */}
      </Card>
    )
  }
}

export default FilterSection;
