/*---Constants---*/


/*---App's state variables---*/
let board, turn, winner;


/*---cached element references---*/
let slots = document.querySelectorAll('td');
let 


/*---event listener---*/


/*---Functions---*/

function initialize() {
    board = [
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null]
    ];
    turn = 1;
    winner = null;
}