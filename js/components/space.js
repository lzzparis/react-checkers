var React = require("react");
var connect = require("react-redux").connect;

var actions = require("../actions/index");

var Space = React.createClass({
  handleSelect: function() {
    var currentPlayer = this.props.turn;

    if(!this.props.space.playable) {
      alert("This is not a valid space (play on dark only)");
    } else if(currentPlayer !== this.props.space.occupied) {
      alert("That's not your checker!");
    } else {
      this.props.dispatch(
          actions.checkOrigin(this.props.players[currentPlayer],
                              this.props.rowNumber+"-"+this.props.columnNumber)
        );
    }
    // this.props.dispatch(actions.sendCoordinates(this.props.rowNumber, this.props.columnNumber));
  },
  render: function() {
    var rowNumber = this.props.rowNumber;
    var columnNumber = this.props.columnNumber;

    return (
      <div className="space" onClick={this.handleSelect}>
        {this.props.space.occupied}
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    players: state.players,
    turn: state.turn
  }

}

var SpaceContainer = connect(mapStateToProps)(Space);

module.exports = SpaceContainer;
