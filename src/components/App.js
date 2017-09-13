import React from 'react';
import Header from './header/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="internalContentContainer">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;