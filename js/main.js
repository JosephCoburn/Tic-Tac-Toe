/*----- constants -----*/ 
const colors = {
  '1': 'purple',
  '-1': 'lime',
  'null': 'white'
}

var win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

/*----- app's state (variables) -----*/
var board, turn, winner

var winner = {
  'T': 'tie',
  'W': 'winner',
  'P': 'playing'
};

var sq1;
var sq2;
var sq3;
var sq4;
var sq5;
var sq6;
var sq7;
var sq8;
var sq9;


/*----- cached element references -----*/ 

/*----- event listeners -----*/ 

/*----- functions -----*/

init();

function handleClick(evt) {
  turn *= -1;
}

function getWinner() {

}

function checkCol(colIdx) {

}

function checkHorizontal(column) {

}

function render() {
  board.forEach(function(idx) {}
};

if (winner) {
  if (winner === 'T') {
    msgEl.textContent = "It's a Tie!";
  } else {

  }
} else {
  msgEl.textContent = `${colors[turn].toUpperCase()}'s Turn`;
}
}

function init() {
  board = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
  winner = null;
  turn = 1;
  render();
}



// what does querySeectorAll do and why are we putting it on 'td div'
// and why are we assigning its value as squares
// what does querySelector do and why are we putting it on h1
// and why is it message 
// h1 is blank...
// 