let currentPlayer = "X"
let board = ['','','','','','','','',''];
let gameActive = true;

let cells = document.querySelectorAll(".cell");
let startButton = document.querySelector('#start-button');
let restartButton = document.querySelector('#restart-button');
let nextTurn = document.querySelector("#turn-text");

restartButton.addEventListener('click', ()=>{
    board = ['','','','','','','','',''];
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('disabled');
        cell.replaceWith(cell.cloneNode(true));
    })
});

startButton.addEventListener('click', ()=>{
    console.log("Game Started.");
    board = ['','','','','','','','',''];
    currentPlayer = 'X';
    gameActive = true;

    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('disabled');
        cell.replaceWith(cell.cloneNode(true));
    });

    nextTurn.innerHTML = `Player ${currentPlayer}'s turn`;
    cells = document.querySelectorAll(".cell");
    cells.forEach(cell =>{
        cell.addEventListener("click", handleCellClick);
    });
})

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


function handleCellClick(event){
    let cell = event.target;
    let cellIndex = cell.getAttribute("data-cell-index")
    console.log("Cell clicked:",cellIndex);
    if (board[cellIndex] === '' && gameActive) {
        board[cellIndex]=currentPlayer;
        cell.textContent = currentPlayer;
        playerChange();
        checkWinner();
    }
}

function playerChange(){
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    nextTurn.innerHTML = `Player ${currentPlayer}'s turn`;
}

function checkWinner(){
    for(i=0; i < winningConditions.length; i++){
        const[a,b,c] = winningConditions[i];

        if (board[a] && board[a] === board[b] && board[a]  === board[c]) {
            console.log(`Player ${board[a]} wins!`);
            nextTurn.innerHTML = `Player ${board[a]} WON`;
            gameActive = false;
            cells.forEach(cell => cell.classList.add('disabled'));
            return;
        }
    }
    if (!board.includes('')) {
        gameActive = false;
        nextTurn.innerHTML = "It's a draw!";
        console.log("It's a draw!");
        cells.forEach(cell => cell.classList.add('disabled'));
    }
}