import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Login from './components/login/Login';
import Users from './components/users/Users';

const isLoggedIn = () => {
  // ...
  true
}


const Root = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      <hr/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/users" render={() => (
          isLoggedIn() ? (
            <Users />
          ) : (
            <Redirect to="/login"/>
          )
        )} />
      </Switch>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Not many options: how about you try loggin in?</h2>
    <br />
    <Link to="/login">Login</Link>
  </div>
)

// ========================================

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
