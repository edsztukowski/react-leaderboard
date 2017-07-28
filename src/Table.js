var React = require('react');
var api = require('./utils/api')

class Table extends React.Component {
  componentDidMount() {
    api.callMonth()
    .then(function(response) {
      console.log(response)
    })
  }
  render() {
    return (
      <div className="table-header col-md-12">
        <h2>Leaderboard</h2>
        <div className="table-cells col-md-12">
          <div className="col-md-1">#</div>
          <div className="col-md-5">Camper Name</div>
          <div className="col-md-3" onClick={api.callMonth}>Points in last 30 days</div>
          <div className="col-md-3" onSelect={api.callAll}>All Time Points</div>
        </div>
      </div>
    )
  }
}

module.exports = Table
