var PLAYER_RED = "RED";
var PLAYER_WHITE = "WHITE";

var INIT_GAME = "INIT_GAME";

var Game = {
  board: {rows:[]},
  turn: PLAYER_RED,
  players: {
    PLAYER_RED: {
      canJump: []
    },
    PLAYER_WHITE: {
      canJump: []
    }
  }
}

var initGame = function() {
  var game = Object.create(Game);

  for(var i=0; i < 8 ; i++) {
    var row = [];
    for(var j=0; j < 8 ; j++) {
      var space = {};
      if ((i + j) % 2) {
        space.playable = true;
      } else {
        space.playable = false;
      }

      if (space.playable) {
        if (i < 3) {
          space.occupied = PLAYER_WHITE;
        } else if (i > 4) {
          space.occupied = PLAYER_RED;
        } else {
          space.occupied = null;
        }
      }
      row.push(space);
    }
    game.board.rows.push(row);
  }

  return { 
    type: INIT_GAME,
    game: game
  }
}

// var CHECK_ORIGIN_SUCCESS = "CHECK_ORIGIN_SUCCESS";

// var checkOriginSuccess = function() {
//   type: CHECK_ORIGIN_SUCCESS,


// }

// var checkOrigin = function(player, coordinates) {
//   if(player.canJump.length == 0) {
//      checkOriginSuccess(coordinates);
//   } else {
//     if(origin is in player.canJump) {
//       checkOriginSuccess(coordinates);
//     } else {
//       alert("you need to jump");
//       checkOriginFailure();
//     }
//   }
// }

var checkValid = function(start, end) {
  //calculate validity based on:
    // state of destination and arithmetic between start/end coordinates
}


var makeMove = function(player, coordinates) {
  //checkValid()
  //update state of start and end spaces in store
  //check if I can jump: 
      //if so push coordinates to player.canJump, do not end turn
      //else, 
        //check if opponent canJump: 
          //push coordinates to other player.canJump, end turn

};




exports.INIT_GAME = INIT_GAME;
exports.initGame = initGame;