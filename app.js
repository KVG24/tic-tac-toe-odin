const createPlayer = ( playerName, marker ) => { 
    return {playerName, marker }
}

const gameBoard = (() => {
    let board = [];
    for (let i = 0; i < 9; i++) {
        board.push('');
    }
    
    const placeMarker = (index) => {
        board[index] = game.activePlayer.marker
    }
    
    return {
        placeMarker,
        board
    }

})();

const game = (() => {
    
    const playerOne = createPlayer('Player 1', 'X');
    const playerTwo = createPlayer('Player 2', 'O');

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

    let activePlayer = playerOne;
    let foundWinner = false;
    
    
    const checkWinner = () => {
        winCombinations.forEach((item, index) => {
            if (gameBoard.board[item[0]] == this.activePlayerplayer.marker && 
                gameBoard.board[item[1]] == this.activePlayerplayer.marker &&
                gameBoard.board[item[2]] == this.activePlayerplayer.marker) {
                    foundWinner = true;
                    console.log(`${this.activePlayer.playerName} won!`);
                }
        })    
    }

    const switchPlayer = () => {
        if (this.activePlayer === playerOne) { 
            this.activePlayer = playerTwo
         } else { 
            this.activePlayer = playerOne
         }
         console.log(`Active player - ${activePlayer.playerName}`);
    }

    return {
        activePlayer,
        checkWinner,
        foundWinner,
        switchPlayer,
    }

})();

