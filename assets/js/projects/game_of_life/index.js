import { createGrid, updateGrid } from './src/gameLogic.js';
import * as canvas from './src/canvas.js';

let data = canvas.GridData();

// Initialize the game
let [rows, cols] = canvas.initializeCanvas(data);
let grid = createGrid(rows, cols);
canvas.drawGrid(grid, data);
canvas.drawCells(grid,data);

let lastUpdate = Date.now();

canvas.setClickHandler(data, (x, y) => {
  console.log(x, y)
});

function gameLoop() {
  const now = Date.now();
  const delta = now - lastUpdate;

  if (delta > 500) { 
    const alive = grid.flat().reduce((acc, cell) => acc + cell, 0);
    if (alive === 0) {
      return;
    }
    grid = updateGrid(grid);

    canvas.clearCanvas(data);
    canvas.drawGrid(grid, data);
    canvas.drawCells(grid, data);

    lastUpdate = now;
  }

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);