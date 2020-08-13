/*---Constants---*/


/*---App's state variables---*/
let board, turn, winner;
let elementIsClicked = 'false';
let playerTurn=1;

/*---cached element references---*/
let table = document.getElementById('container').addEventListener('click', handleClick);


/*---event listener---*/
function handleClick(evt){
    console.log(evt);
}


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
    render();
}

