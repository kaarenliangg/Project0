console.log('sos');


$(document).ready(function () { 

    // allows to check if game is finished and player will not be able to proceed with clicking
    gameFinished = false;

    // start with X
    let currentPlayer = 'X'

    // future proof. if = 9, === draw
    let numPlays = 0;

    // create empty arrays to push values into so that we can check with the winning function
    let score = {
        X: [],
        O: [],
    }

    const winning = [
 
        [0, 1, 2], // first row
        [3, 4, 5], // second row
        [6, 7, 8], // third row
        
        [0, 3, 6], // first column
        [1, 4, 7], // second column
        [2, 5, 8],// third column
    
        [0, 4, 8], // diagonal #1
        [2, 4, 6], // diagonal #2

    ];

    // checks if there are any winners
    const isWinner = function() {

        // Iterate through the winning arrays
        for (let i = 0; i < winning.length; i++) {
            let win = true;

            // Check if all the elements in the winning array are also present in the player's score array
            for (let s = 0; s < winning[i].length; s++) {

                // access the array of current player and .include checks if the winning array values are NOT found in the score
                if (!score[currentPlayer].includes(winning[i][j])) {
                    // return false as not found and no one has won
                    win = false;
                    // break the loop
                    break;
                }
            }
            // if won 
            if (win) {
                // If all elements are present, the player has won
                gameFinished = true;
                return true;
            }
        }

        // If no winning array matches with the player's score array, return false
        return false;
    }
 

    // when the player clicks, activate the function
    $('.grid-item').on('click', function() {

        // validate player turn, if not equal to empty, unable to proceed
        if ($(this).text() !== '') {
            return;
        } 
        
        // ensure game is not finished and able for players to proceed. If finished, this function would not run and players will not be able to click on the board
        if (gameFinished === false) {

            // start number of plays and ++ (add 1) each turn
            numPlays++;

            // update the grid with text of currentPlayer
            $(this).text(currentPlayer);

            // starts with 'X' and alternates between using if statements
            if (currentPlayer === 'X') {
                // if current player is x then current player == O
                currentPlayer = 'O';
            } else {
                // switches back to X
                currentPlayer = 'X';
            }
            
            // update the score array
            if (currentPlayer === 'X') {
                // if it is player X, it updates the
                let index = $(this).data('index');
                score['O'].push(Number(index));
            } else {
                let index = $(this).data('index');
                score['X'].push(Number(index));
            }
            // before switching to new player, check to see if there is a winner
            if (isWinner()) {
                alert(`Winner: ${ currentPlayer }`);
                gameFinished  = true;

            } else if (numPlays === 9) {
                alert('Draw');
                gameFinished = true;
            } 
            
            }
        });
    });

        
    // $('#0').on('click', function() {
    //     $('#0').html('x');

    // });

    // $('#1').on('click', function() {
    //     $('#1').html('o');

    // });

    // $('#2').on('click', function() {
        // $('#2').html('x');


// 1. Create board 3 x 3 
// 2. start with player. Make assumpting of X first 
// 3. Make a play in the box -- must check if it is empty, else it ignores the play
// 4. After adding text into board, must switch to PLAYER O - can use if statements.
// 5. Draw? Have number of plays that ++ each round and once it reaches 9, it is automatically a draw as there are no spots left
// 6. must always check for winners before continuing the game.
