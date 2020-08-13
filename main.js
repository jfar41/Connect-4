/*---Constants---*/
const lookup = {
    '1': 'red',
    '-1': 'yellow',
    'null': 'white'
  };


/*---App's state variables---*/


/*---cached element references---*/
let table = document.querySelector('container');
let cells = document.querySelectorAll('td');
let tableRow = document.getElementsByClassName('row');
let showCurrentPlayer= document.getElementById('message');
let currentPlayer=1;
/*---event listener---*/

for(let i=0; i < cells.length;i++) {
    cells[i].addEventListener('click', (e) => {
        //check if working
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
    })
} 



/*---Functions---*/
initialize();
//





//to reference for win logic
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