var React = require('react');

function TableHeader() {
  return (
    <div className="table-header col-md-12">
      <h2>Leaderboard</h2>
      <div className="table-cells col-md-12">
        <div className="col-md-1">#</div>
        <div className="col-md-5">Camper Name</div>
        <div className="col-md-3">Points in last 30 days</div>
        <div className="col-md-3">All Time Points</div>
      </div>
    </div>
  )
}

module.exports = TableHeader
