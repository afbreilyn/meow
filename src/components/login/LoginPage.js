import React from 'react';
import TextInput from '../common/TextInput';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';

class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {credentials: {email: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.loginUser(this.state.credentials);
  }

  render() {
    let {
      isLoginPending,
      loginEmailError,
      loginErrorMessage,
      loginPasswordError
    } = this.props;
    
    return (
      <div>
        <form>
          <TextInput
            name="email"
            label="email"
            value={ this.state.credentials.email }
            onChange={ this.onChange }
            error={ loginEmailError } />

          <TextInput
            name="password"
            label="password"
            type="password"
            value={ this.state.credentials.password }
            onChange={ this.onChange }
            error={ loginPasswordError } />

          <input
            type="submit"
            className="btn btn-primary"
            onClick={ this.onSave } />
            {" "}
        </form>
        { isLoginPending && <div>Please wait...</div> }
        { loginErrorMessage && <div>{ loginErrorMessage }</div> }
      </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.session.isLoginPending,
    loginEmailError: state.session.loginEmailError,
    loginErrorMessage: state.session.loginErrorMessage,
    loginPasswordError: state.session.loginPasswordError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
