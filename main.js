/*---Constants---*/

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
let gotWinner = 'false';

/*---cached element references---*/
let table = document.querySelector('container');
let cells = document.querySelectorAll('td');
let tableRow = document.getElementsByClassName('row');
let showCurrentMove= document.getElementById('message');
//eventually will do indexHTML to tell whose current player and/or who won

let currentPlayer= 1;

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

/*---Functions---*/
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
    
    horizontalCheck();
    verticalCheck();
    diagonalCheckDownRight();
    diagonalCheckDownLeft();
    
    //have checks return gotWinner = true
    //when gotWinner = true stop game and ask to restart (or tell the player than they won)
    render();
}

initialize();

//to reference for win logic
function initialize() {
   turn = 1;
    winner = null; 
} 
function render() {
    console.log('rendering');
    //loop thru board and color circle depending on what's insde each element
    for(let row=0; row<board.length; row++) {
        for(let col=0; col< board[row].length; col++) {
            if (board[row][col] == 1) {
                const cell = document.querySelector(`#row-${row}`).querySelector(`#col-${col}`);
                cell.style.backgroundColor = 'red';
            } else if (board[row][col] == -1) {
                const cell = document.querySelector(`#row-${row}`).querySelector(`#col-${col}`);
                cell.style.backgroundColor = 'yellow';
            } else {
                //  cells.style.backgroundColor = 'white';
             }
        }  
    }
    finalWinner();
    function finalWinner() {
        if (gotWinner == 'p1') {
            showCurrentMove.innerText = 'Player 1 Won!';
        } 
        if (gotWinner == 'p2') {
            showCurrentMove.innerText = 'Player 2 Won!';
        }
    }
}            //if 1 make yellow (by this point already stated player 1 is yellow) n vice versa

function horizontalCheck() {
    console.log('inside horizontal');
    for (let i =0; i <board.length; i++) {
        for (let j =0; j < board[i].length; j++) {
            if (board[i][j] + board[i][j+1] + board[i][j+2] + board[i][j+3] == 4) {
                if (currentPlayer = 1) {
                    gotWinner = 'p1';
                    }
                } 
            if (board[i][j] + board[i][j+1] + board[i][j+2] + board[i][j+3] == -4) {
                if (currentPlayer = -1) {
                    gotWinner = 'p2';
                    }   
                }            
        }
    }
}

function verticalCheck() {
    // console.log('inside horizontal');
    //row < 3 to limit checks to defined boundaries. check can only happen if less than
    //first 3 rows bc if starts at 4rd row(idx 3), then you go outside the board
    for (let row =0; row <3; row++) {
        for (let col =0; col <board[row].length; col++) {
            if (board[row][col] + board[row+1][col] + board[row+2][col] +board[row+3][col] == 4) {
                if (currentPlayer = 1) {
                    gotWinner = 'p1';
                    } 
                }
            if (board[row][col] + board[row+1][col] + board[row+2][col] +board[row+3][col] == -4) {
                if (currentPlayer = 1) {
                    gotWinner = 'p2';
                    }
                }
        }
    }
}

function diagonalCheckDownRight() {
    // console.log('inside horizontal');
    //row < 3 to limit checks to defined boundaries. check can only happen if less than
    //first 3 rows bc if starts at 4rd row(idx 3), then you go outside the board
    for (let row =0; row <3; row++) {
        for (let col =0; col <4; col++) {
            if (board[row][col] + board[row+1][col+1] + board[row+2][col+2] +board[row+3][col+3] == 4) {
                if (currentPlayer = 1) {
                    gotWinner = 'p1';
                    } 
                }
            if (board[row][col] + board[row+1][col+1] + board[row+2][col+2] +board[row+3][col+3] == -4) {
                if (currentPlayer = -1) {
                    gotWinner = 'p2';
                    }
                }
        }
    }
}

function diagonalCheckDownLeft() {
    // console.log('inside horizontal');
    //row < 3 to limit checks to defined boundaries. check can only happen if less than
    //first 3 rows bc if starts at 4rd row(idx 3), then you go outside the board
    for (let row = 5; row >2; row--) {
        for (let col =0; col <4; col++) {
            if (board[row][col] + board[row-1][col+1] + board[row-2][col+2] +board[row-3][col+3] == 4) {
                if (currentPlayer = 1) {
                    gotWinner = 'p1';
                    } 
                }
            if (board[row][col] + board[row-1][col+1] + board[row-2][col+2] +board[row-3][col+3] == -4) {
                if (currentPlayer = -1) {
                    gotWinner = 'p2';
                    }
                }
        }
    }
}
