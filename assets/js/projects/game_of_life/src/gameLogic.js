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

const countNeighbors = (grid, x, y) => {
  let directions = [
    { x: -1, y: -1 }, // top left
    { x: 0, y: -1 }, // top
    { x: 1, y: -1 }, // top right
    { x: -1, y: 0 }, // left
    { x: 1, y: 0 }, // right
    { x: -1, y: 1 }, // bottom left
    { x: 0, y: 1 }, // bottom
    { x: 1, y: 1 } // bottom right
  ];
  let count = 0;
  for (let direction of directions) {
    let newX = x + direction.x;
    let newY = y + direction.y;
    newX = (newX + grid.length) % grid.length;
    newY = (newY + grid[0].length) % grid[0].length;

    count += grid[newX][newY];
  }
  return count;;
}

const updateGrid = (grid) => {
  let newGrid = grid.map(row => [...row]);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const neighbors = countNeighbors(grid, i, j);
      if (grid[i][j] === 1) {
        if (neighbors < 2 || neighbors > 3) {
          newGrid[i][j] = 0;
        }
      } else {
        if (neighbors === 3) {
          newGrid[i][j] = 1;
        }
      }
    }
  }
  return newGrid;
}

export {
  createGrid,
  updateGrid
}