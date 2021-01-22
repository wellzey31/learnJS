//Author: Brett Wells
//Date: 1/18/21

//declare HTML elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');
const cpuSwitchDiv = document.querySelector('.cpuSwitch');
const firstSwitchDiv = document.querySelector('.firstSwitch');

//define variables
let b = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
let turn = 0;
let win = false;
let cpuOn = false;
let cpuFirst = true;
var bestMove = {
  x : -1, y : -1
};

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    console.log('i =' + i + ' j =' + j);
  }
}
console.log('i =' + i + ' j =' + j);

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

cpuSwitchDiv.addEventListener('mousedown', handleCpuSwitch);

firstSwitchDiv.addEventListener('mousedown', handleFirstSwitch);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener('click', handleCellClick);
}



//event Handlers
function handleReset(e) {
  console.log(e);
  if (e.target.className == 'reset'){
    console.log('true')
  }
  resetBoard(b);
  turn = 0;
}

function handleCpuSwitch(e) {
  console.log(e);
  cpuOn = !cpuOn;
  console.log(cpuOn);
}

function handleFirstSwitch(e) {
  console.log(e);
  cpuFirst = !cpuFirst;
  console.log(cpuFirst);
}

function handleCellClick(e) {
  if (e.target.id != null) {
    if (e.target.innerHTML == ' ') {
      document.getElementById(e.target.id).innerHTML = xOro();
      updateBoard(b);
      printBoard(b);
      if(checkWin(b)) {
        console.log('Player Win!');
      } else {
        chooseMove(b);
        b[bestMove.x][bestMove.y];
        updateBoardHTML(b);
        printBoard(b);
      }
    }
  }
  console.log(e.target.id);
  console.log(e);
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
  for (var i = 0; i < 3; i++) {
      if (b[i][1] == b[i][0] && b[i][2] == b[i][0] && b[i][0] != ' ') {
      return true;
    }
  }
  //check cols
  for (var i = 0; i < 3; i++) {
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

function updateBoard(b) {
  b[0][0] = document.getElementById('c1').innerHTML;
  b[0][1] = document.getElementById('c2').innerHTML;
  b[0][2] = document.getElementById('c3').innerHTML;
  b[1][0] = document.getElementById('c4').innerHTML;
  b[1][1] = document.getElementById('c5').innerHTML;
  b[1][2] = document.getElementById('c6').innerHTML;
  b[2][0] = document.getElementById('c7').innerHTML;
  b[2][1] = document.getElementById('c8').innerHTML;
  b[2][2] = document.getElementById('c9').innerHTML;
}

function updateBoardHTML(b) {
  document.getElementById('c1').innerHTML = b[0][0];
  document.getElementById('c2').innerHTML = b[0][1];
  document.getElementById('c3').innerHTML = b[0][2];
  document.getElementById('c4').innerHTML = b[1][0];
  document.getElementById('c5').innerHTML = b[1][1];
  document.getElementById('c6').innerHTML = b[1][2];
  document.getElementById('c7').innerHTML = b[2][0];
  document.getElementById('c8').innerHTML = b[2][1];
  document.getElementById('c9').innerHTML = b[2][2];
}

function resetBoard(b) {
  for (cellDiv of cellDivs) {
    cellDiv.innerHTML = ' ';
  }
  updateBoard(b);
  printBoard(b);
  statusDiv.innerHTML = 'O is next';
}

function chooseMove(b) {
  bestVal = -1000;
  bestMove.x = -1;
  bestMove.y = -1;

  //traverse board for open positions
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      //check for empty positions
      if (b[i][j] == ' ') {
        b[i][j] = 'O';
        moveVal = minimax(b, 0, false);

        //undo move
        b[i][j] = ' ';

        //if the value is max then this is the best move
        if (moveVal > bestVal) {
          bestMove.x = i;
          bestMove.y = j;
          bestVal = moveVal;
        }
      }
    }
  }
  return bestMove;
}

function minimax(b, depth, isMax) {
  //cpu win condition
  if (!isMax && checkWin(b)) {
    return 10;
  //human win check
  } else if (isMax && checkWin(b)) {
    return -10;
  //tie check
  } else if (boardFull(b)) {
    return 0;
  }
  if (isMax) {
    best = -100;

    for (var row = 0; row < 3; row++) {
      for (var col = 0; col < 3; col++) {
        if (b[row][col] == ' ') {
          //make move
          b[row][col] = 'O';
          //compute max
          best = Math.max(best, minimax(b, depth+1, !isMax));
          //undo move
          b[row][col] = ' ';
        }
      }
    }
    return best;
  } else {
    best = 100;
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 3; c++) {
        if (b[r][c] == ' ') {
          //make move
          b[r][c] = 'X';
          //compute max
          best = Math.min(best, minimax(b, depth+1, !isMax));
          //undo move
          console.log('r =' + r + ' c =' + c);
          b[r][c] = ' ';
        }
      }
    }
    return best;
  }
}

function boardFull(b) {
  for(i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (b[i][j] == ' ') return false;
    }
  }
  return true;
}
