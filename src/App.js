import React, { Component } from 'react';
import './App.css';
var Table = require('./Table')

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="App-header row">
          <div className="col-md-12">
            <h1>Freecodecamp Leaderboard</h1>
          </div>
        </div>
        <div className="row">
          <Table />
        </div>
      </div>
    );
  }
}

export default App;
