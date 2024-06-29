import { styles } from './styles.js';

const default_config = {
  cell_size: 50,
  grid_color: styles['primary'],
  cell_color: styles['tertiary'],
  border_size: 1
};

let ctx;
let canvas = null;

const initializeCanvas = (id, config) => {
  canvas = document.getElementById(id);

  // Get the CSS size of the canvas
  const cssWidth = canvas.clientWidth;
  const cssHeight = canvas.clientHeight;

  // Set the pixel size of the canvas to match its CSS size
  canvas.width = cssWidth;
  canvas.height = cssHeight;

  const cols = Math.floor(cssWidth / config.cell_size);
  const rows = Math.floor(cssHeight / config.cell_size);

  ctx = canvas.getContext('2d');
  if (!canvas) {
    throw new Error('Failed to get canvas element');
  }
  return [rows, cols];
}

const setClickHandler = (config, callback) => {
  canvas.addEventListener('click', (event) => {
    const x = Math.floor(event.offsetX / config.cell_size);
    const y = Math.floor(event.offsetY / config.cell_size);
    callback(x, y);
  });
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const drawGrid = (grid, config) => {
  const cols = grid[0].length;
  const rows = grid.length;

  ctx.strokeStyle = config.grid_color;
  ctx.beginPath();

  // draw vertical lines
  for (let i = 0; i < cols; i++) {
    ctx.moveTo(i * config.cell_size, 0);
    ctx.lineTo(i * config.cell_size, canvas.height);
  }

  // draw horizontal lines
  for (let i = 0; i < rows; i++) {
    ctx.moveTo(0, i * config.cell_size);
    ctx.lineTo(canvas.width, i * config.cell_size);
  }
  ctx.stroke();
}

const drawCells = (grid, config) => {
  const cols = grid[0].length;
  const rows = grid.length;
  const borderSize = config.border_size;
  const cellWithBorder = config.cell_size - borderSize * 2;
  const cell_color = config.cell_color;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        ctx.fillStyle = cell_color
        ctx.fillRect(j * config.cell_size + borderSize, i * config.cell_size + borderSize, cellWithBorder, cellWithBorder);
      }
    }
  }
}

export { 
  drawGrid, 
  drawCells,
  initializeCanvas,
  clearCanvas,
  setClickHandler,
  default_config
}