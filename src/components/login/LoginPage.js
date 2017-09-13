import React from 'react';
import TextInput from '../common/TextInput';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card'

import './loginCss.css';

class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {credentials: {email: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event, str) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = str;
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
      loginPasswordError,
      loggedIn
    } = this.props;
    
    if (loggedIn) {
      return(
        <div>
          why are you here??
          <br />
          go here:
          <a href='/users'>
            link
          </a>
        </div>
      )
    }

    return (
      <Card className="loginContainer">
        { loginErrorMessage && <h3 className="red text-center">{ loginErrorMessage }</h3> }
        <form>
          <TextInput
            name="email"
            label="email"
            value={ this.state.credentials.email }
            onchange={ this.onChange }
            errors={ loginEmailError } />
          <TextInput
            name="password"
            label="password"
            type="password"
            value={ this.state.credentials.password }
            onchange={ this.onChange }
            errors={ loginPasswordError } />
          <br />
          <RaisedButton
            label={ isLoginPending ? "Please wait..." : "Submit" }
            style={null}
            onClick={ this.onSave }
            disabled={ isLoginPending }
            fullWidth={ true } />
        </form>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.session.isLoginPending,
    loginEmailError: state.session.loginEmailError,
    loginErrorMessage: state.session.loginErrorMessage,
    loginPasswordError: state.session.loginPasswordError,
    loggedIn: state.session.logged_in
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
