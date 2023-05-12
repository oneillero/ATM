import React, { Component } from 'react';

import Account from './Account';

class App extends Component {
  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo">
            <h1>ATM: Deposits and Withdrawls</h1>
          </div>
          <div id="title">Your checking and savings balance:</div>
        </div>
        <Account name="Checking" />
        <Account name="Savings"/>
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;

