import React, { Component } from 'react';
import './App.css';
import octocat from './octocat.png';
var Table = require('./Table');


class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="App-header row">
          <div className="col-md-12">
            <h1>Freecodecamp Leaderboard</h1>
          </div>
        </div>
        <div>
          <Table />
        </div>
        <div className="footer">
          <h4>Built with React by Ed Sztukowski | 2017</h4>
          <div>
            <a href="https://github.com/edsztukowski/react-leaderboard"><img src={octocat}></img></a>

            </div>
        </div>
      </div>
    );
  }
}

export default App;
