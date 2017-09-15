import React from 'react';
import { Route, Switch } from 'react-router-dom'
import App from './components/App';
import HomePage from './components/home/HomePage';
import UsersPage from './components/users/UsersPage';
import LoginPage from './components/login/LoginPage';
import auth from './auth/authenticator';

export default (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/users" component={UsersPage} />
      <Route render={ () => { return <div> 404 </div> } } />
    </Switch>
  </App>
);
