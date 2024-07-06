import { load_styles } from "./styles.js";

const GridData = () => {
  return {
    cell_size: 20,
    get grid_color() { return load_styles()["primary"]; },
    get cell_color() { return load_styles()["tertiary"]; },
    border_size: 1,
    canvas_id: "canvas",
    canvas: null,
    ctx: null,
    offsetX: 0,
    offsetY: 0,
  };
};

const initializeCanvas = (data) => {
  data.canvas = document.getElementById(data.canvas_id);

  // Get the CSS size of the canvas
  const cssWidth = data.canvas.clientWidth;
  const cssHeight = data.canvas.clientHeight;

  // Set the pixel size of the canvas to match its CSS size
  data.canvas.width = cssWidth;
  data.canvas.height = cssHeight;

  const cols = Math.floor(cssWidth / data.cell_size);
  const rows = Math.floor(cssHeight / data.cell_size);

  // Calculate the remaining space
  const remainingWidth = cssWidth - cols * data.cell_size;
  const remainingHeight = cssHeight - rows * data.cell_size;

  // Calculate the offset to center the grid
  data.offsetX = remainingWidth / 2;
  data.offsetY = remainingHeight / 2;

  data.ctx = data.canvas.getContext("2d");
  if (!data.canvas) {
    throw new Error("Failed to get canvas element");
  }
  return [rows, cols];
};

const setClickHandler = (data, callback) => {
  canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left - data.offsetX;
    const y = event.clientY - rect.top - data.offsetY;
    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);
    callback(col, row);
  });
};

function clearCanvas(data) {
  data.ctx.clearRect(0, 0, data.canvas.width, data.canvas.height);
}

const drawGrid = (grid, data) => {
  const cols = grid[0].length;
  const rows = grid.length;

  data.ctx.strokeStyle = data.grid_color;
  data.ctx.beginPath();

  // draw vertical lines
  for (let i = 0; i <= cols; i++) {
    data.ctx.moveTo(i * data.cell_size + data.offsetX, 0);
    data.ctx.lineTo(i * data.cell_size + data.offsetX, data.canvas.height);
  }

  // draw horizontal lines
  for (let i = 0; i <= rows; i++) {
    data.ctx.moveTo(0, i * data.cell_size + data.offsetY);
    data.ctx.lineTo(data.canvas.width, i * data.cell_size + data.offsetY);
  }
  data.ctx.stroke();
};

const drawCells = (grid, data) => {
  const cols = grid[0].length;
  const rows = grid.length;
  const borderSize = data.border_size;
  const cellWithBorder = data.cell_size - borderSize * 2;
  const cell_color = data.cell_color;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        data.ctx.fillStyle = cell_color;
        data.ctx.fillRect(
          j * data.cell_size + borderSize + data.offsetX,
          i * data.cell_size + borderSize + data.offsetY,
          cellWithBorder,
          cellWithBorder
        );
      }
    }
  }
};

export {
  drawGrid,
  drawCells,
  initializeCanvas,
  clearCanvas,
  setClickHandler,
  GridData,
};
