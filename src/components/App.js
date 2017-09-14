import React from 'react';
import { withRouter } from 'react-router'
import Header from './header/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
}

export default withRouter(App);