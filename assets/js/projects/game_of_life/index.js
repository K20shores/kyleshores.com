import { createGrid, updateGrid } from './src/gameLogic.js';
import { drawGrid, drawCells, initializeCanvas, clearCanvas } from './src/canvas.js';
import { handleUserInput } from './src/userInput.js';

// Initialize the game
const cols = 50;
const rows = 50;
initializeCanvas(cols, rows);
let grid = createGrid(rows, cols);

// Game loop
function gameLoop() {
  let dt = 1000;

  grid = updateGrid(grid);
  clearCanvas();
  drawGrid(grid);
  drawCells(grid);

  setTimeout(gameLoop, dt);
}

gameLoop();