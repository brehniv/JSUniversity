let data = null;
const gridSize = 5;
let grid = null;
let minMoves = null;
let indexGrid=0;
let moves=0;
const victoryMessage = document.getElementById("victory-message");

function updateText(id, text) {
    document.getElementById(id).textContent = text;
}
function fetchData() {
    fetch(
        "https://raw.githubusercontent.com/brehniv/JSUniversity/main/Lab6/json/response.json"
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error("[P1]: Fetch Error");
            }
            return response.json();
        })
        .then((jsonData) => {
            data = jsonData;
            initLights();
        })
        .catch((error) => {
            console.error("Fetching error:", error);
        });
}
function deepClone(data) {
    return JSON.parse(JSON.stringify(data));
}
function createGameBoard() {
    const gameBoard = document.getElementById("game-board");
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = i;
            cell.dataset.col = j;
            row.appendChild(cell);
        }
        gameBoard.appendChild(row);
    }
}

function initLights() {
    if (!data) return;
    grid = deepClone(data[indexGrid].grid);
    minMoves = data[indexGrid].min_to_solve;
    updateText("min-moves",minMoves);
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        const row = Math.floor(index / gridSize);
        const col = index % gridSize;
        const state = grid[row][col] ? "on" : "off";
        cell.classList.toggle("on", state === "on");
        cell.classList.toggle("off", state === "off");
    });
}
function updateGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        const state = grid[row][col] ? "on" : "off";
        cell.classList.toggle("on", state === "on");
        cell.classList.toggle("off", state === "off");
    });
}
const toggleSwitch = (row, col) => {
    grid[row][col] = !grid[row][col];
    if (row > 0) grid[row - 1][col] = !grid[row - 1][col];
    if (row < gridSize - 1) grid[row + 1][col] = !grid[row + 1][col];
    if (col > 0) grid[row][col - 1] = !grid[row][col - 1];
    if (col < gridSize - 1) grid[row][col + 1] = !grid[row][col + 1];
};

function handleClick(event) {
    moves++;
    updateText("moves", moves);

    const cell = event.target;
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    toggleSwitch(row, col);
    updateGrid();
    if (winCheck()) finishGame();
}
function finishGame() {
    victoryMessage.style.display = "block";
    const message = document.getElementById("optimal-moves-count");
    if (moves <= minMoves) {
        message.textContent = "You solved it in an optimal number of moves!";
    } else {
        message.textContent = "You solved it, but it took more moves than optimal.";
    }
}
function newGame() {
    indexGrid++;
    if(indexGrid==3)indexGrid = 0;
    fetchData();
    moves=0;
    updateText("moves", moves);
    victoryMessage.style.display = "none";
}
function restartGame() {
    grid = deepClone(data[indexGrid].grid);
    moves=0;
    updateText("moves", moves);
    updateText("min-moves", minMoves);
    initLights();
    victoryMessage.style.display = "none";
}
function winCheck() {
    const cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains("off")) {
            return false;
        }
    }
    return true;
}

function initGame() {
    createGameBoard();
    fetchData();
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("click", handleClick);
    });
    
    document.getElementById("new-game-btn").addEventListener("click", newGame);
    document.getElementById("restart-btn").addEventListener("click", restartGame);
}

initGame();
