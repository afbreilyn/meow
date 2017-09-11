import React from 'react';

class HomePage extends React.Component {
  render() {
    return(
      <div>
        <h2>Pretty boring, right? Probably should try logging in:</h2>
        <br />
        <a href="/login">Login</a>
      </div>
    )
  }
}

export default HomePage;
