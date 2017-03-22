var React = require('react');

var actions = require('../actions/index');

var initialState = actions.initGame();

var reducer = function(state, action) {
  state = state || initialState;

  // switch(action.type) 
  //   case actions.CHECK_ORIGIN_SUCCESS:
  //     return Object.assign({}, state, );

  return state;
};

exports.reducer = reducer;
exports.initialState = initialState;
