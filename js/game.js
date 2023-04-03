console.log('sos');


$(document).ready(function () { 

    // // array of all spots on the board
    // const buttons = document.querySelectorAll('.grid-item'); // Node List
    // buttons = Array.from(buttons); // array

    // // empty board 
    // let board = [
    //     [ , , ,],
    //     [ , , ,],
    //     [ , , ,],
    // ];

    // start with X
    let currentPlayer = 'X'

    let numPlays = 0;

    // create empty arrays to push values into so that we can check with the winning function
    let score = {
        X: [],
        O: [],
    }
 
    // when the player clicks, activate the function
    $('.grid-item').on('click', function() {

        // start number of plays and ++ (add 1) each turn
        numPlays++;

        // update the grid with text of currentPlayer
        $(this).text(currentPlayer);
        
        // pushing the index into the score array
        score[currentPlayer].push(Number($(this).data('index')));

        // before switching to new player, check to see if there is a winner

        if (won()) {
            alert('Winner: ', $('currentPlayer')) // change to something else later
        }

        // starts with 'X' and alternates between using if statements
        if (currentPlayer === 'X') {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }
          
    });

   
    
   
    // if (firstPlayer = player1) {
    //     board.addEventListener('click', function() {
    //         board.innerText = player1
    //     })
    // }


    const winning = [
 
        [0, 1, 2], // first row
        [3, 4, 5], // second row
        [6, 7, 8] // third row
        
        [0, 3, 6], // first column
        [1, 4, 7], // second column
        [2, 5, 8],// third column
    
        [0, 4, 8], // diagonal #1
        [2, 4, 6], // diagonal #2

 
    ];

    // const validateMove = function() {
    //     if ($('grid-item') === '') {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }



    
    // $('#0').on('click', function() {
    //     $('#0').html('x');

    // });

    // $('#1').on('click', function() {
    //     $('#1').html('o');

    // });

    // $('#2').on('click', function() {
        // $('#2').html('x');

    });

