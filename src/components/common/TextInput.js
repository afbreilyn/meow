import React from 'react';
import { string, func, array } from 'prop-types'
import TextField from 'material-ui/TextField';

class TextInput extends React.Component {
  render() {
    let {
      name,
      label,
      onchange,
      value,
      errors,
      type
    } = this.props;

    let errorArr;

    if (errors && errors.length > 0) {
      errorArr = errors.map((err, idx) =>
        <div key={ idx }>
          { err }
        </div>
      )
    };


    return (
      <div>
        <TextField
          type={ type || 'text' }
          hintText={ label }
          floatingLabelText={ label }
          errorText={ errorArr }
          value={ value }
          name={ name }
          onChange={ onchange } />
      </div>
    )
  }
};

TextInput.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  onchange: func.isRequired,
  value: string,
  errors: array
};

export default TextInput;
