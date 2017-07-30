var React = require('react');
var PropTypes = require("prop-types");

function CamperView(props) {

  var camperArr = props.data;

  return (
    <div>
    {camperArr.map(function(curr, index) {
      return (
        <div className="camper-row">
          <div className="col-xs-1" key={index + 1}>{index + 1}</div>
          <div className="col-xs-5" key={curr.username}>{curr.username}</div>
          <div className="col-xs-3" key={curr.recent}>{curr.recent}</div>
          <div className="col-xs-3" key={curr.alltime}>{curr.alltime}</div>
        </div>
      )
    }, this)}
    </div>
  )
}


module.exports = CamperView;
