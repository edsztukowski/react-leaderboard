var React = require('react');
var api = require('./utils/api');
var CamperView = require('./CamperView');
var PropTypes = require("prop-types");

function TableHeader(props) {
  return(
    <div className="table-header row">
      <div className="col-xs-1 rank">#</div>
      <div className="col-xs-5 name">Camper Name</div>
      <div className="col-xs-3 recent-btn" onClick={props.getMonth}>Points in last 30 days</div>
      <div className="col-xs-3 alltime-btn" onClick={props.getAll}>All Time Points</div>
    </div>
  )
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: []
    }
    this.updateAll = this.updateAll.bind(this);
    this.updateRecent = this.updateRecent.bind(this);
  }

  componentDidMount() {
    this.updateRecent()
  }

  updateRecent() {
    this.setState(function() {
      return {
        tableData: []
      }
    })
    api.callMonth()
    .then(function(response) {
      this.setState(function() {
          return {
            tableData:response
          }
        })
      }.bind(this));
    }

    updateAll() {
      this.setState(function() {
        return {
          tableData: []
        }
      })
      api.callAll()
      .then(function(response) {
        this.setState(function() {
            return {
              tableData:response
            }
          })
        }.bind(this));
      }

  render() {
    return (
      <div className="row">
        <TableHeader getMonth={this.updateRecent} getAll={this.updateAll}/>
        <CamperView data={this.state.tableData} />
      </div>
    )
  }
}

CamperView.propTypes = {
  data: PropTypes.array
}

module.exports = Table
