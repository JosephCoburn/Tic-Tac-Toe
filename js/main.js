/*----- constants -----*/ 
const colors = {
    '1': 'lime',
    '-1': 'purple',
    '0': 'white'
}

/*----- app's state (variables) -----*/
var board, turn;

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
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    winner = null;
    turn = 1;
    render();
}