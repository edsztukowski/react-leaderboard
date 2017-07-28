import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var TableHeader = require('./TableHeader')

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
          <TableHeader />
        </div>
      </div>
    );
  }
}

export default App;
