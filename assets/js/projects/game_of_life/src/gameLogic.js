const createGrid = (rows, cols) => {
  const grid = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
  // randomize grid with 1s and zeros
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = Math.random() > 0.5 ? 1 : 0;
    }
  }
  return grid;
}

const updateGrid = (grid) => {
}

export {
  createGrid,
  updateGrid
}