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
import collection from 'easter-egg-collection'

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
    // UPDATE SCORE - X
    // ---------------------------------------------
  

    const updateScoreX = function() {
        let currentScore = Number($('.xScore').text());
        newScore = currentScore + 1;
        $('.xScore').html(newScore) 
    };

    // ---------------------------------------------
    // WINNING OUTPUT - X
    // ---------------------------------------------
    
    const winOutputX = function () {
        $('h3.winnerMsg').text('\u{1F389}  Winner is Player X'); 
            $('h3.winnerMsg').attr('id', 'won');
            $('div.rectangle').attr('id', 'activeRectangle');
            $('.reset').removeAttr('id');
    }

    // ---------------------------------------------
    // WINNING OUTPUT - O
    // ---------------------------------------------
    
    const winOutputO = function () {
        $('h3.winnerMsg').text('\u{1F389}  Winner is Player O'); 
            $('h3.winnerMsg').attr('id', 'won');
            $('div.rectangle').attr('id', 'activeRectangle');
            $('.reset').removeAttr('id');
    }

    // ---------------------------------------------
    // UPDATE SCORE - O
    // ---------------------------------------------
  

    const updateScoreO = function() {
        let currentScore = Number($('.oScore').text());
        newScore = currentScore + 1;
        $('.oScore').html(newScore) 
    };

    // ---------------------------------------------
    // Checks for wins for 'X'
    // ---------------------------------------------
    const checkWinner = function() {

        // Horizontal

        if ($('#0').text() == 'X' && $('#1').text() == 'X' && $('#2').text() == 'X') {
            gameFinished = true;
            winOutputX();
            updateScoreX();

            
        
            } else if ($('#3').text() == 'X' && $('#4').text() == 'X' && $('#5').text() == 'X') {
                gameFinished = true;
                winOutputX();
                updateScoreX();
                

            } else if ($('#6').text() == 'X' && $('#7').text() == 'X' && $('#8').text() == 'X') {
                gameFinished = true;
                winOutputX();
                updateScoreX();
                
            
            // Vertical
            
            } else if ($('#0').text() == 'X' && $('#3').text() == 'X' && $('#6').text() == 'X') {
                gameFinished = true;
                winOutputX();
                updateScoreX();
                
                

            } else if ($('#1').text() == 'X' && $('#4').text() == 'X' && $('#7').text() == 'X') {
                gameFinished = true;
                winOutputX();
                updateScoreX();
                
                
            
            } else if ($('#2').text() == 'X' && $('#5').text() == 'X' && $('#8').text() == 'X') {
                gameFinished = true;
                winOutputX();
                updateScoreX();
                
                
            
            // Diagonal

            } else if ($('#0').text() == 'X' && $('#4').text() == 'X' && $('#8').text() == 'X') {
                gameFinished = true;
                winOutputX();
                updateScoreX();
                
                

            } else if ($('#2').text() == 'X' && $('#4').text() == 'X' && $('#6').text() == 'X') {
                gameFinished = true;
                winOutputX();
                updateScoreX();
                

        
    

     // ---------------------------------------------
     // Checks for wins for 'O'
     // ---------------------------------------------
        
        // Horizontal

            } else if ($('#0').text() == 'O' && $('#1').text() == 'O' && $('#2').text() == 'O') {
                gameFinished = true;
                winOutputO();
                updateScoreO();
                
                

            } else if ($('#3').text() == 'O' && $('#4').text() == 'O' && $('#5').text() == 'O') {
                gameFinished = true;
                winOutputO();
                updateScoreO();
                

            } else if ($('#6').text() == 'O' && $('#7').text() == 'O' && $('#8').text() == 'O') {
                gameFinished = true;
                winOutputO();
                updateScoreO();
                
            
            // Vertical
            
            } else if ($('#0').text() == 'O' && $('#3').text() == 'O' && $('#6').text() == 'O') {
                gameFinished = true;
                winOutputO();
                updateScoreO();
                

            } else if ($('#1').text() == 'O' && $('#4').text() == 'O' && $('#7').text() == 'O') {
                gameFinished = true;
                winOutputO();
                updateScoreO();
                
            
            } else if ($('#2').text() == 'O' && $('#5').text() == 'O' && $('#8').text() == 'O') {
                gameFinished = true;
                winOutputO();
                updateScoreO();
                
            

            // Diagonal

            } else if ($('#0').text() == 'O' && $('#4').text() == 'O' && $('#8').text() == 'O') {
                gameFinished = true;
                winOutputO();
                updateScoreO();
                

            } else if ($('#2').text() == 'O' && $('#4').text() == 'O' && $('#6').text() == 'O') {
                gameFinished = true;
                winOutputO();
                updateScoreO();
                

        // Draw
        } if (numPlays === 9 && gameFinished === false) {
            $('h3.winnerMsg').text('Draw'); 
                $('h3.winnerMsg').attr('id', 'won');
                $('.reset').removeAttr('id');
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

            // update the grid with text of currentPlayer. Using 'this' to indicate only 1 of the box, if 'grid-item' is used then it would select all the items.
            $(this).text(currentPlayer);

            //  ++ (add 1) each turn - able to determine draw
            numPlays++;

            // check if there is a winner after making their move
            checkWinner();

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

    // ---------------------------------------------
    // RESET THE GAME   
    // ---------------------------------------------

    const resetGame = function() {
        if ($(this).attr('id') === 'inactive') {
            return;
        } else {
        $('h3.winnerMsg').removeAttr('id');
        $('div.rectangle').removeAttr('id');
        $('h3.winnerMsg').text('');
        $('.reset').attr('id', 'inactive');
        $('#0').text('');
        $('#1').text('');
        $('#2').text('');
        $('#3').text('');
        $('#4').text('');
        $('#5').text('');
        $('#6').text('');
        $('#7').text('');
        $('#8').text('');
        gameFinished = false;
        numPlays = 0;
        } 
    }       
    $('.reset').on('click', resetGame);
});
