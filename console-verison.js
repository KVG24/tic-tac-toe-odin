let board = [];
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function populateBoard() {
    for (let i = 0; i < 9; i++) {
        board.push('');
    }
}

const playerOne = { name: 'player 1', mark: 'X'};
const playerTwo = { name: 'player 2', mark: 'O'};

let activePlayer = playerOne;
let gameWon = false;
let cells = 9;

function game() {
    console.log('Begin game...');
    populateBoard();
    for (let i = 8; i >= 0; i--) {
        placeMarker(prompt(`${activePlayer.name}, insert index number: `));
        switchPlayer();
        checkWinner();
    }
}

function placeMarker(index) {
    board[index] = activePlayer.mark;
    console.log(`${activePlayer.name} placed mark on ${board}`);
    cells -= 1;
}

function switchPlayer() {
    if (activePlayer === playerOne) {
        activePlayer = playerTwo
    } else {
        activePlayer = playerOne;
    }
}

function checkWinner() {
    winCombinations.forEach((item) => { // [0, 1, 2, 3, 4, 5, 6, 7]
        if (board[item[0]] === activePlayer.mark && 
            board[item[1]] === activePlayer.mark && 
            board[item[2]] === activePlayer.mark) {
            console.log('winner!');
            console.log(board[item[0]], board[item[1]], board[item[2]] );
            gameWon = true;
        }
    })
}

game();