import { styles } from './styles.js';

const cell_size = 100;
let ctx;

const initializeCanvas = (cols, rows) => {
  const canvas = document.getElementById('canvas');
  canvas.width = cell_size * cols;
  canvas.height = cell_size * rows;
  ctx = canvas.getContext('2d');
  if (!canvas) {
    throw new Error('Failed to get canvas element');
  }
  return canvas;
}

const drawGrid = (grid) => {
  const cols = grid[0].length;
  const rows = grid.length;

  ctx.strokeStyle = styles['primary'];
  ctx.beginPath();

  // draw vertical lines
  for (let i = 0; i < cols; i++) {
    ctx.moveTo(i * cell_size, 0);
    ctx.lineTo(i * cell_size, canvas.height);
  }

  // draw horizontal lines
  for (let i = 0; i < rows; i++) {
    ctx.moveTo(0, i * cell_size);
    ctx.lineTo(canvas.width, i * cell_size);
  }
  ctx.stroke();
}

const drawCells = (grid) => {
  const cols = grid[0].length;
  const rows = grid.length;
  const borderSize = 1; // Adjust this to change the border size
  const cellWithBorder = cell_size - borderSize * 2;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        ctx.fillStyle = styles['tertiary'];
        ctx.fillRect(j * cell_size + borderSize, i * cell_size + borderSize, cellWithBorder, cellWithBorder);
      }
    }
  }
}

export { 
  drawGrid, 
  drawCells,
  initializeCanvas
}