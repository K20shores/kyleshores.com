---
layout: post
title: Conway's Game of Life
date: June 2024
tags: [fun]
---

# Determined Unpredictability

[Conway's game of life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) encodes the rules for cell life
and death on a grid. The rules of the game for each cell are simple.

1. Cells with 2 or fewer neighbors die off
2. Cells that have 2 or 3 neighbors live on
3. Cells with more than 3 neighbors die
4. Dead cells surrounded by 3 live cells spring back to life

Yet the final state from any starting state is unpredictable but still determined. What does this mean?
Given a starting state, predicting the future 2, 5, 10, 100 steps away is not possible. Life across the board,
where it lives, its density, cannot be predicted using any analytical tool. To find where life thrives in the
future, we have to let the cells play their interminable, fully determined game.


<div id="conway-container">
  <canvas id="canvas"></canvas>
</div>
<link rel="stylesheet" type="text/css" href="{{ '/assets/css/projects/conway.css' | relative_url }}">

<script type="module" src="{{ '/assets/js/projects/game_of_life/index.js' | relative_url }}"></script>