var React = require("react");
var connect = require("react-redux").connect;
var router = require("react-router");
var hashHistory = router.hashHistory; 

var actions = require("../actions/index");

var Board = require("./board");

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Board boardSize={8} />
      </div>
    );
  }
});

module.exports = App;
