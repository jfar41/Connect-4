/*---Constants---*/
const lookup = {
    '1': 'red',
    '-1': 'yellow',
    'null': 'white'
  };


/*---App's state variables---*/
let board, turn, winner;
board = [
    [null,null,null,null,null,null, null],
    [null,null,null,null,null,null, null],
    [null,null,null,null,null,null, null],
    [null,null,null,null,null,null, null],
    [null,null,null,null,null,null, null],
    [null,null,null,null,null,null, null]
];

/*---cached element references---*/
let table = document.querySelector('container');
let cells = document.querySelectorAll('td');
let tableRow = document.getElementsByClassName('row');
let showCurrentPlayer= document.getElementById('message');
//eventually will do indexHTML to tell whose current player and/or who won

let currentPlayer=1;
/*---event listener---*/


for(let i=0; i < cells.length;i++) {
    cells[i].addEventListener('click', (e) => {
        //check if working
   
        clickSlots(e.target.cellIndex);
        
    })
    
} 



//to iterate through board
//change clickSlots to where it's detecting column instead of row
//clickSlots now works just fix above console.log to then assign to a variable
//that can be passed into clickSlots

//think of how to update i from down level and up. I thought of push but there might be a better way
//if board[i] ==null  && currentPlayer==1 {board.pop}

function clickSlots(colIdx) {
    if (board[0][colIdx]) {
        console.log('this role is filled');
        return 
    }
    let isFilled = true;
    let row = 5;
    while (isFilled && row>=0) {
        if (board[row][colIdx]== null) {
            board[row][colIdx] = currentPlayer;
            isFilled= false;
            currentPlayer *= -1;
        } else {
            row--;
        }
    }      
    console.log(board); 
    render();
}
/*---Functions---*/
initialize();


//to reference for win logic
function initialize() {
   
    
    turn = 1;
    winner = null;
    
} 
function render() {
    console.log('rendering');
    //loop thru board and color cirlce depending on what's insde each element
    for(let row=0; row<board.length; row++) {
        for(let col=0; col< board[row].length; col++) {
            if (board[row][col] == 1) {
                const cell = document.querySelector(`#row-${row}`).querySelector(`#col-${col}`);
                cell.style.backgroundColor = 'red';
            } else if (board[row][col] == -1) {
                // cells.style.backgroundColor = 'yellow'
            } else {
                //  cells.style.backgroundColor = 'white';
             }
        }  
    }
}            //if 1 make yellow (by this point already stated player 1 is yellow) n vice versa