var React = require("react");
var connect = require("react-redux").connect;

var actions = require("../actions/index");

var Row = require("./row");

var Board = React.createClass({
  render: function(props) {
    var rows = [];

    var rows = this.props.board.rows.map(function(row, i){
      return <Row row={row} rowNumber={i} key={i}/>;
    });

    return (
      <div className="board">
        {rows}
      </div>
    );
  }  
});

var mapStateToProps = function(state, props) {

  return {
    board: state.game.board
  }
}

var BoardContainer = connect(mapStateToProps)(Board);

module.exports = BoardContainer;
