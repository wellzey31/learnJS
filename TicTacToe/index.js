//Author: Brett Wells
//Date: 1/18/21

//declare HTML elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

//define the board
let b = [
  [' ', ' ', ' '],
  ['X', 'X', 'X'],
  [' ', ' ', ' ']
];
let turn = 0;
let win = false;

//function to place either an 'X' or an 'O'
function xOro() {
  turn++;
  if (turn % 2 == 0) {
    statusDiv.innerHTML = 'O is next';
    return 'X';
  } else {
    statusDiv.innerHTML = 'X is next';
    return 'O';
  }
}

//event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener('click', handleCellClick);
}

//event Handlers
function handleReset(e) {
  console.log(e);

}

function handleCellClick(e) {
  console.log(e.target.id);
  console.log(e);
  if (e.target.innerHTML == ' ') {
    document.getElementById(e.target.id).innerHTML = xOro();
  }
}



//Outputs board elements to console
function printBoard(b) {
    console.log(b[0][0] + '|' + b[0][1] + '|' + b[0][2]);
    console.log('------');
    console.log(b[1][0] + '|' + b[1][1] + '|' + b[1][2]);
    console.log('------');
    console.log(b[2][0] + '|' + b[2][1] + '|' + b[2][2]);
}

function checkWin(b) {
  //check rows
  for (i = 0; i < 3; i++) {
      if (b[i][1] == b[i][0] && b[i][2] == b[i][0] && b[i][0] != ' ') {
      return true;
    }
  }
  //check cols
  for (i = 0; i < 3; i++) {
      if (b[0][i] == b[1][i] && b[2][i] == b[0][i] && b[0][i] != ' ') {
      return true;
    }
  }
  //check diagonals
  if (b[0][0] == b[1][1] && b[1][1] == b[2][2] && b[1][1] != ' ') {
    return true;
  }
  if (b[0][2] == b[1][1] && b[1][1] == b[2][0] && b[1][1] != ' ') {
    return true;
  }
  return false;
}

/*function runGame() {
  do {
    if(turn != 1) printBoard();
    //std::cout << turn << std::endl;
    if(turn % 2 == 0) {
      playerTurn();
      if (checkWin(b)) {
        console.log('You win!');
        win = true;
        break;
      }
    } else {
      computerTurn();
      if (checkWin(b)) {
        console.log('Computer wins.');
        win = true;
        break;
      }
    }
    turn++;
  } while (!boardFull(b));
  if(!win) {
    console.log('Tie game.');
  if(win) printBoard();
}*/

function playerTurn() {


}

//main JS
printBoard(b);
playerTurn();
if(checkWin(b)) {
  console.log('Win');
} else {
  console.log('Lose');
}
