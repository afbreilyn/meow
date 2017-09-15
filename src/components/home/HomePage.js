import React from 'react';

class HomePage extends React.Component {
  render() {
    return(
      <div className="text-center">
        <h2>Pretty boring, right?</h2>
        <br />
        <img src={ require("../../images/thisisawebsite.png") } alt="homestarWelcomePic" />
        <br />
        <br />
        <small> by aaron foster breilyn </small>
      </div>
    )
  }
}

export default HomePage;
