import { createGrid, updateGrid } from './src/gameLogic.js';
import * as canvas from './src/canvas.js';
import { drawGrid, drawCells, clearCanvas, setClickHandler } from './src/canvas.js';

let config = canvas.default_config;

// Initialize the game
let [rows, cols] = canvas.initializeCanvas('canvas', config);
let grid = createGrid(rows, cols);
drawGrid(grid, config);
drawCells(grid, config);

let lastUpdate = Date.now();

setClickHandler(config, (x, y) => {
  console.log(x, y)
});

function gameLoop() {
  const now = Date.now();
  const delta = now - lastUpdate;

  if (delta > 500) { 
    grid = updateGrid(grid);
    clearCanvas();
    drawGrid(grid, config);
    drawCells(grid, config);

    lastUpdate = now;
  }

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);