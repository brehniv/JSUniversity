const GRID_SIZE = 5; // Розмір сітки

// Створення інтерфейсу гри
function createGameBoard() {
    const gameBoard = document.getElementById("game-board");
    for (let i = 0; i < GRID_SIZE; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < GRID_SIZE; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = i;
            cell.dataset.col = j;
            row.appendChild(cell);
        }
        gameBoard.appendChild(row);
    }
}

// Оновлення стану сітки
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

// Зміна стану вимикача та його сусідів
function toggleSwitch(row, col) {
    grid[row][col] = !grid[row][col];
    if (row > 0) grid[row - 1][col] = !grid[row - 1][col];
    if (row < GRID_SIZE - 1) grid[row + 1][col] = !grid[row + 1][col];
    if (col > 0) grid[row][col - 1] = !grid[row][col - 1];
    if (col < GRID_SIZE - 1) grid[row][col + 1] = !grid[row][col + 1];
}

// Обробка кліків по вимикачам
function handleClick(event) {
    const cell = event.target;
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    toggleSwitch(row, col);
    updateGrid();
}

// Ініціалізація гри
function initGame() {
    toggleSwitch(2,3);
    createGameBoard();
    updateGrid();
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("click", handleClick);
    });
}

// Ініціалізація та початок гри
const grid = Array.from({ length: GRID_SIZE }, () =>
    Array(GRID_SIZE).fill(false)
);
initGame();
