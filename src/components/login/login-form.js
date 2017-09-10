import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/reducer';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  onSubmit = (e) => {
    e.preventDefault();
    let { email, password } = this.state;

    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }

  render() {
    let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return(
      <div>
        <div className="login-form-wrapper" onSubmit={ this.onSubmit }>
          <form name="loginFrom">
            <label>Email:</label>
            <input type="email" name="email" onChange={ e => this.setState({email: e.target.value}) } value={ email } />
            <br />
            <label>Password:</label>
            <input type="password" name="password" onChange={ e => this.setState({password: e.target.value}) } value={ password } />

            <input type="submit" value="Login" />
            { isLoginPending && <div>Please wait...</div> }
            { isLoginSuccess && <div>Welcome back</div>}
            { loginError && <div>{loginError.message}</div> }

          </form> 
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm );
