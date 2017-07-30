var React = require('react');

function CamperView(props) {

  var camperArr = props.data;

  return (
    <div>
    {camperArr.map(function(curr, index) {
      return (
        <div className="camper-row" key={curr+index}>
          <div className="col-xs-1" key={index + 1}>{index + 1}</div>
          <div className="col-xs-5" key={curr.username}>
            <a target="_blank" href={'https://www.freecodecamp.org/' + curr.username}>
              <img
                className="user-image"
                src={curr.img}
                alt={curr.username}
              />
              {curr.username}
            </a>
          </div>
          <div className="col-xs-3" key={curr.username + curr.recent + index}>{curr.recent}</div>
          <div className="col-xs-3" key={curr.username + curr.alltime}>{curr.alltime}</div>
        </div>
      )
    }, this)}
    </div>
  )
}


module.exports = CamperView;
