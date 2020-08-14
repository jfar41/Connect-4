/*---Constants---*/

/*---App's state variables---*/
let board;
board = [
    [null,null,null,null,null,null, null],
    [null,null,null,null,null,null, null],
    [null,null,null,null,null,null, null],
    [null,null,null,null,null,null, null],
    [null,null,null,null,null,null, null],
    [null,null,null,null,null,null, null]
];
let currentPlayer= 1;

let gotWinner = 'false';

/*---cached element references---*/
let table = document.querySelector('.container');
let cells = document.querySelectorAll('td');
let tableRow = document.getElementsByClassName('row');
let showCurrentMove= document.getElementById('message');
let restartMsg = document.getElementById('refresh');
//eventually will do indexHTML to tell whose current player and/or who won


/*---event listener---*/
for(let i=0; i < cells.length;i++) {
    cells[i].addEventListener('click', (e) => {
        //check if working   
        clickSlots(e.target.cellIndex);
    });  
} 
//to iterate through board
//change clickSlots to where it's detecting column instead of row

/*---Functions---*/
function clickSlots(colIdx) {
    if (board[0][colIdx]) {        
    return }
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
    render();
}
   
function render() {
    //loop thru board and color circles depending on what currentPlayer clicked
    for(let row=0; row<board.length; row++) {
        for(let col=0; col< board[row].length; col++) {
            if (board[row][col] == 1) {
                const cell = document.querySelector(`#row-${row}`).querySelector(`#col-${col}`);
                cell.style.backgroundColor = 'red';
            } else if (board[row][col] == -1) {
                const cell = document.querySelector(`#row-${row}`).querySelector(`#col-${col}`);
                cell.style.backgroundColor = 'yellow';
            } 
        }  
    }
    finalWinner();
}            

function horizontalCheck() {    
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
    //row < 3 to limit checks to defined boundaries. check can only happen if less than
    //first 3 rows bc if starts at 4rd row(idx 3), then you go outside the board and you get undefined
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

function finalWinner() {
    if (gotWinner == 'p1') {
        showCurrentMove.innerText = 'Player 1 Won!';
        table.style.backgroundColor= 'white';
        restartMsg.innerText = 'Refresh the page to play again!'
    } 
    if (gotWinner == 'p2') {
        showCurrentMove.innerText = 'Player 2 Won!';
        table.style.backgroundColor='white';
        restartMsg.innerText = 'Refresh the page to play again!'
    }
}