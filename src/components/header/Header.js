import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../../actions/sessionActions';
import { withRouter } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      tabSelected: '/home'
    }

    this.logOut = this.logOut.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  logOut() {
    this.props.actions.logOutUser();
  }

  handleChange(tabSelected) {
    const newRL = tabSelected.props.value; /* get the pun? */
    this.setState({
      tabSelected: newRL
    });

    this.props.history.push(newRL);
  }

  render() {
    let {
      logged_in
    } = this.props;

    let {
      tabSelected
    } = this.state;

    let logInOut = logged_in
      ? <Tab
          label="Logout"
          data-route="/logout"
          onActive={ this.logOut }
          value="/logout"
          active={ true } />
      : <Tab
          label="Login"
          data-route="/login"
          onActive={ this.handleChange }
          value="/login" />

    return (
      <AppBar className="fakeAppBar">
        <div className="tabContainer">
          <Tabs className="tabs"
            value={ this.props.location.pathname.includes(tabSelected) ? tabSelected : 'home' }>
            <Tab
              label="Home"
              data-route="/"
              onActive={ this.handleChange }
              value="/home" />
            { logInOut }
          </Tabs>
        </div>
      </AppBar>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    logged_in: state.session.logged_in
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
