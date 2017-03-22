var React = require("react");

var Space = require("./space");

var Row = function(props) {
  var rowNumber = props.rowNumber;
  var spaces = props.row.map(function(space,i) {
    return <Space space={space} rowNumber={rowNumber} columnNumber={i} key={rowNumber+i}/>

  });

  return (
    <div className="row">
      {spaces}
    </div>
  );
}

module.exports = Row;