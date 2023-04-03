console.log('sos');

// create an array of the buttons


$(document).ready(function () {
    let player1 = 'X';
    let player2 = 'O';

    // Create an array of buttons
    const buttons = document.querySelectorAll('.grid-item');
    
    // Identify winning solutions in array 
    [0, 1, 2], // first row
    [3, 4, 5], // second row
    [6, 7, 8] // third ropw

    // ROUND 1 - 9 spots available
    $('#1').on('click', function() {
        $('#1').addClass('x');

    });


    // How to know which side is starting the game
    
    // start with player 1 default as X then build into selecting their own shape

    // create win for X 
    // create win for O 

    // make sure players are unable to click the same box twice

    // winner if 3 of the same classes are matching horizontally, vertically, and diagonally.
});