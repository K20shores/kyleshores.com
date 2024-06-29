import { createGrid, countNeighbors } from '../src/gameLogic.js';

describe('createGrid', () => {
  it('should create a grid with the correct dimensions', () => {
    const grid = createGrid(5, 5);
    expect(grid.length).toBe(5);
    expect(grid[0].length).toBe(5);
  });
});


describe('countNeighbors 3x3 grid', () => {
  it('should correctly count neighbors in the middle of the grid', () => {
    const grid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];
    expect(countNeighbors(grid, 1, 1)).toBe(0);
  });

  const grid = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
  ];
  it('should correctly count neighbors on the edge of the grid', () => {
    expect(countNeighbors(grid, 0, 1)).toBe(5);
  });

  it('should correctly count neighbors in the top left corner of the grid', () => {
    expect(countNeighbors(grid, 0, 0)).toBe(4);
  });

  it('should correctly count neighbors in the bottom right of the grid', () => {
    expect(countNeighbors(grid, 2, 2)).toBe(4);
  });

  it('should correctly count neighbors in the bottom left of the grid', () => {
    expect(countNeighbors(grid, 2, 0)).toBe(4);
  });

  it('should correctly count neighbors in the top right of the grid', () => {
    expect(countNeighbors(grid, 0, 2)).toBe(4);
  });
});

describe('countNeighbors 5x5 grid', () => {
  const grid = [
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1]
  ];

  it('should correctly count neighbors in the middle of the grid', () => {
    expect(countNeighbors(grid, 2, 2)).toBe(8);
  });

  it('should correctly count neighbors on the edge of the grid', () => {
    expect(countNeighbors(grid, 2, 0)).toBe(4);
  });
});