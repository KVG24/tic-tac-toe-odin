const gameBoard = (() => {
    let board;
    
    const cellContainer = document.querySelector('.game-container');
    const restartBtn = document.getElementById('restart-button');
    
    function populateBoard() {
        for (let i = 0; i < 9; i++) {
            const div = document.createElement('div');
            div.classList.add('cell');
            cellContainer.appendChild(div);
            board = [];
            board.push('');
        }
    }

    populateBoard();

    const cells = document.querySelectorAll('.game-container div');

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            cell.classList.add(game.activePlayer.mark);
            board[index] = game.activePlayer.mark;
            cell.style.pointerEvents = 'none';
            game.freeCells -= 1;
            game.checkWinner();
            if (game.foundWinner == false) {
                if (game.freeCells > 0) {
                    game.switchPlayer()
                }
                if (game.freeCells == 0) {
                    game.resultText.textContent = `It's a tie!`;
                    restartBtn.style.display = 'block';
                }
            }
        })
    })

    restartBtn.addEventListener('click', restart);

    function restart() {
        location.reload()
    }

    return {
        board,
        cellContainer,
        populateBoard,
        restartBtn
    }

})();

const game = (() => {
    
    const playerOne = { name: 'Player 1', mark: 'x' };
    const playerTwo = { name: 'Player 2', mark: 'o' };
    const resultText = document.getElementById('result-text');

    let activePlayer = playerOne;
    let foundWinner = false;
    let freeCells = 9;

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

    function checkWinner() {
        winCombinations.forEach((item, index) => {
            if (gameBoard.board[item[0]] == this.activePlayer.mark && 
                gameBoard.board[item[1]] == this.activePlayer.mark &&
                gameBoard.board[item[2]] == this.activePlayer.mark) {
                    foundWinner = true;
                    gameBoard.restartBtn.style.display = 'block';
                    resultText.textContent = `${this.activePlayer.name} wins!`;
                }
        })    
    }

    function switchPlayer() {
        if (this.activePlayer === playerOne) { 
            this.activePlayer = playerTwo
         } else { 
            this.activePlayer = playerOne
         }
    }

    return {
        activePlayer,
        freeCells,
        resultText,
        checkWinner,
        foundWinner,
        switchPlayer,
        playerOne
    }

})();