import React from 'react';
import { string, func, array } from 'prop-types'

class TextInput extends React.Component {
  render() {
    let {
      name,
      label,
      onChange,
      placeholder,
      value,
      errors,
      type
    } = this.props;

    let wrapperClass = 'form-group';
    let errorArr;

    if (errors && errors.length > 0) {
      wrapperClass += ' has-error';
      errorArr = errors.map((err, idx) =>
        <div key={idx}>
          { err }
        </div>
      )
    };

    return (
      <div className={ wrapperClass }>
        <label htmlFor={ name }>{ label }</label>
        <div className="field">
          <input
            type={ type || "text" }
            name={ name }
            className="form-control"
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange } />
          { errors && errorArr }
        </div>
      </div>
    );
  }
};

TextInput.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  value: string,
  errors: array
};

export default TextInput;
