// ------------
// PLAN 
// ------------

// 1. Create board 3 x 3 
// 2. Create winning solutions
// 3. start with player. Make assumpting of X first -> use text to input board
// 4. Make a play in the box (.html .text) -- must check if it is empty, else it ignores the play
// 5. After adding text into board, must switch to PLAYER O - can use if statements.
// 6. Draw? Have number of plays that ++ each round and once it reaches 9, it is automatically a draw as there are no spots left
// 7. must always check for winners before continuing the game
// --------------------------------------------------------------------------------------------------

$(document).ready(function () { 

    // allows to check if game is finished and player will not be able to proceed with clicking
    gameFinished = false;

    // start with X
    let currentPlayer = 'X'

    // future proof. if = 9, === draw
    let numPlays = 0;


    // winning solutions
    // const winning = [
 
    //     [0, 1, 2], // first row
    //     [3, 4, 5], // second row 
    //     [6, 7, 8], // third row
        
    //     [0, 3, 6], // first column
    //     [1, 4, 7], // second column
    //     [2, 5, 8],// third column
    
    //     [0, 4, 8], // diagonal #1
    //     [2, 4, 6], // diagonal #2

    // ];
    

    // ---------------------------------------------
    // Checks for wins for 'X'
    // ---------------------------------------------
    const checkWinner = function() {

        // Horizontally 

        if ($('#0').text() == 'X' && $('#1').text() == 'X' && $('#2').text() == 'X') {
            gameFinished = true;
            $('.winnerMsg').text('&#x1F389; Winner is X'); 
            
        
            } else if ($('#3').text() == 'X' && $('#4').text() == 'X' && $('#5').text() == 'X') {
                gameFinished = true;
                $('.winnerMsg').text('&#x1F389; Winner is X'); 
                

            } else if ($('#6').text() == 'X' && $('#7').text() == 'X' && $('#8').text() == 'X') {
                gameFinished = true;
                $('.winnerMsg').text('&#x1F389; Winner is X'); 
                
            
            // Vertically
            
            } else if ($('#0').text() == 'X' && $('#3').text() == 'X' && $('#6').text() == 'X') {
                gameFinished = true;
                $('.winnerMsg').text('&#x1F389; Winner is X'); 
                

            } else if ($('#1').text() == 'X' && $('#4').text() == 'X' && $('#7').text() == 'X') {
                gameFinished = true;
                $('.winnerMsg').text('&#x1F389; Winner is X'); 
                
            
            } else if ($('#2').text() == 'X' && $('#5').text() == 'X' && $('#8').text() == 'X') {
                gameFinished = true;
                $('.winnerMsg').text('&#x1F389; Winner is X'); 
                
            
            // diagonal

            } else if ($('#0').text() == 'X' && $('#4').text() == 'X' && $('#8').text() == 'X') {
                gameFinished = true;
                $('.winnerMsg').text('&#x1F389; Winner is X'); 
                

            } else if ($('#2').text() == 'X' && $('#4').text() == 'X' && $('#6').text() == 'X') {
                gameFinished = true;
                $('.winnerMsg').text('&#x1F389; Winner is X'); 
                

        
    

     // ---------------------------------------------
     // Checks for wins for 'O'
     // ---------------------------------------------
        
        // Horizontally 

            } else if ($('#0').text() == 'O' && $('#1').text() == 'O' && $('#2').text() == 'O') {
                gameFinished = true;
                $('.winnerMsg').text('&#x1F389; Winner is O'); 
                
                

            } else if ($('#3').text() == 'O' && $('#4').text() == 'O' && $('#5').text() == 'O') {
                gameFinished = true;
                $('.winnerMsg').text('&#x1F389; Winner is O');
                

            } else if ($('#6').text() == 'O' && $('#7').text() == 'O' && $('#8').text() == 'O') {
                gameFinished = true;
                $('.winnerMsg').text('&#x1F389; Winner is O');
                
            
            // Vertically
            
            } else if ($('#0').text() == 'O' && $('#3').text() == 'O' && $('#6').text() == 'O') {
                gameFinished = true;
                $('.winnerMsg').text('&#x1F389; Winner is O');
                

            } else if ($('#1').text() == 'O' && $('#4').text() == 'O' && $('#7').text() == 'O') {
                gameFinished = true;
                $('.winnerMsg').text('&#x1F389; Winner is O');
                
            
            } else if ($('#2').text() == 'O' && $('#5').text() == 'O' && $('#8').text() == 'O') {
                gameFinished = true;
                $('.winnerMsg').text('&#x1F389; Winner is O');
                
            

            // diagonal

            } else if ($('#0').text() == 'O' && $('#4').text() == 'O' && $('#8').text() == 'O') {
                gameFinished = true;
                $('.winnerMsg').text('&#x1F389; Winner is O');
                

            } else if ($('#2').text() == 'O' && $('#4').text() == 'O' && $('#6').text() == 'O') {
                gameFinished = true;
                $('.winnerMsg').text('&#x1F389; Winner is O');
                

        // draw
        } if (numPlays === 9 && gameFinished === false) {
            $('.winnerMsg').text('Game is a draw');
            gameFinished = true;
        }         
    };

    // ---------------------------------------------
    // START THE GAME
    // ---------------------------------------------

    // when the player clicks, activate the function
    $('.grid-item').on('click', function() {

        // 1. validate player turn, if not equal to empty, unable to proceed and player has to select another box
        // if ($(this).text() !== '') {
        //     return;
        // } 
        
        // 2. Ensure game is not finished and able for players to proceed. If finished, the game would not continue and players will not be able to click on the board
        if (gameFinished === false && $(this).text() === '') {

            // 3. start number of plays and ++ (add 1) each turn - able to determine draw
            numPlays++;

            // update the grid with text of currentPlayer. Using 'this' to indicate only 1 of the box, if 'grid-item' is used then it would select all the items.
            $(this).text(currentPlayer);

            // check if there is a winner after making their move
            if (checkWinner() === true) {
                $('.winnerMsg').text(`Winner is ${ currentPlayer }`);
                gameFinished = true;
            } 


            // after updating the board, if currentPlayer is 'X'. It will switch to 'O' using if statements. Then constantly switches between players as later on it defaults to 'X' again and restarts. 
            if (currentPlayer === 'X') {
                // if current player is x then current player switches to O
                currentPlayer = 'O';
                $('.xTurn').removeClass('X');
                $('.oTurn').addClass('O');
            } else {
                // switches back to X
                currentPlayer = 'X';
                $('.xTurn').addClass('X');
                $('.oTurn').removeClass('O');
            }        
    
        }
    });
});
