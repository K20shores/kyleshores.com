import { createGrid, updateGrid } from './src/gameLogic.js';
import { drawGrid, drawCells, initializeCanvas } from './src/canvas.js';
import { handleUserInput } from './src/userInput.js';

// Initialize the game
const cols = 50;
const rows = 50;
const grid = createGrid(rows, cols);
initializeCanvas(cols, rows);

handleUserInput(grid);

// Game loop
function gameLoop() {
  updateGrid(grid);
  drawGrid(grid);
  drawCells(grid);
}

gameLoop();