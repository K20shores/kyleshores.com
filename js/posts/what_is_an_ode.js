"use strict";

const estimate_pi = (N, duration) => {
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  const width = 460 - margin.left - margin.right;
  const height = 460 - margin.top - margin.bottom;

  const xmin = -0.5;
  const xmax = 0.5;
  const ymin = xmin;
  const ymax = xmax;

  d3.select("#estimate-pi").selectAll("svg").remove();

  const _width = width + margin.left + margin.right;
  const _height = height + margin.top + margin.bottom;

  d3.select("#estimate-pi")
    .style("max-width", `${_width}px`)
    .style("max-width", `${_height}px`);

  const svg = d3
    .select("#estimate-pi")
    .append("svg")
    .attr("viewBox", `0 0 ${_width} ${_height}`)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("width", "100%")
    .attr("height", "100%")
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Define the scales and axes
  const scale = 1.01;
  const x = d3
    .scaleLinear()
    .domain([scale * xmin, scale * xmax])
    .range([0, width]);
  const y = d3
    .scaleLinear()
    .domain([scale * ymin, scale * ymax])
    .range([height, 0]);

  svg
    .append("g")
    .attr("transform", `translate(0, ${height / 2})`)
    .call(d3.axisBottom(x).tickValues([xmin, xmax]));

  svg
    .append("g")
    .attr("transform", `translate(${width / 2}, 0)`)
    .call(d3.axisLeft(y).tickValues([ymin, ymax]));

  const random = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  // Generate random points in a square
  const points = d3.range(N).map(function (d) {
    return { x: random(xmin, xmax), y: random(ymin, ymax) };
  });

  // draw a red circle with radius 1
  svg
    .append("circle")
    .attr("cx", function (d) {
      return x(0);
    })
    .attr("cy", function (d) {
      return y(0);
    })
    .attr("r", y(0) - y(ymax))
    .attr("fill", "red")
    .attr("fill-opacity", 0.2)
    .attr("stroke", "red")
    .attr("stroke-width", 1);

  let in_circle = 0;
  // Add a counter
  const counter = svg
    .append("text")
    .attr("x", 0)
    .attr("y", 0)
    .attr("text-anchor", "start")
    .attr("font-family", "Arial")
    .attr("font-size", "14px")
    .text("Visible: 0");

  // Add circles for each point with delayed appearance
  svg
    .selectAll(".point")
    .data(points)
    .enter()
    .append("circle")
    .attr("class", "point")
    .attr("cx", function (d) {
      return x(d.x);
    })
    .attr("cy", function (d) {
      return y(d.y);
    })
    .attr("r", 1)
    .attr("fill", "steelblue")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1)
    .attr("stroke-opacity", 1.0)
    .attr("fill-opacity", 0.5)
    .attr("display", "none") // initially hide the circles
    .transition()
    .delay((d, i) => ((duration * 1000) / N) * i) // calculate delay based on index
    .attr("display", "inline") // show circles with transition
    .on("start", function (d, i) {
      if (d.x ** 2 + d.y ** 2 <= 0.25) {
        in_circle += 1;
      }
      const estimate = ((4 * in_circle) / (i + 1)).toFixed(5);
      counter.text(`Pi estimate: ${estimate}`);
    });
};

let currentDuration = parseInt(document.getElementById("duration").value);
let currentNumPoints = parseInt(document.getElementById("num-points").value);

let durationValue = document.getElementById("durationValue");
durationValue.textContent = currentDuration;

let numPointsValue = document.getElementById("numPointsValue");
numPointsValue.textContent = currentNumPoints;

function displayDuration() {
  let durationInput = document.getElementById("duration");
  let durationValue = document.getElementById("durationValue");
  durationValue.textContent = durationInput.value;
  currentDuration = parseInt(durationInput.value); // Update current duration
  estimate_pi(currentNumPoints, currentDuration); // Call estimate_pi with updated values
}

function displayNumPoints() {
  let numPointsInput = document.getElementById("num-points");
  let numPointsValue = document.getElementById("numPointsValue");
  numPointsValue.textContent = numPointsInput.value;
  currentNumPoints = parseInt(numPointsInput.value); // Update current number of points
  estimate_pi(currentNumPoints, currentDuration); // Call estimate_pi with updated values
}

function onSlideChange() {
  let durationInput = document.getElementById("duration");
  let durationValue = document.getElementById("durationValue");
  durationValue.textContent = durationInput.value;
  let numPointsInput = document.getElementById("num-points");
  let numPointsValue = document.getElementById("numPointsValue");
  numPointsValue.textContent = numPointsInput.value;
  currentDuration = parseInt(durationInput.value);
  currentNumPoints = parseInt(numPointsInput.value);
}

estimate_pi(currentNumPoints, currentDuration);

const formalism = () => {
  const margin = { top: 20, right: 20, bottom: 20, left: 30 };
  const width = 460 - margin.left - margin.right;
  const height = 460 - margin.top - margin.bottom;

  const xmin = 0;
  const xmax = 2 * Math.PI;

  const _width = width + margin.left + margin.right;
  const _height = height + margin.top + margin.bottom;

  d3.select("#formalism-example")
    .style("max-width", `${_width}px`)
    .style("max-width", `${_height}px`);

  const svg = d3
    .select("#formalism-example")
    .append("svg")
    .attr("viewBox", `0 0 ${_width} ${_height}`)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("width", "100%")
    .attr("height", "100%")
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Define the scales and axes
  const x = d3.scaleLinear().domain([xmin, xmax]).range([0, width]);
  const y = d3.scaleLinear().domain([-1, 1]).range([height, 0]);

  svg
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));

  svg.append("g").call(d3.axisLeft(y));

  // Generate sine wave data
  const sineData = d3.range(xmin, xmax, 0.01).map(function (d) {
    return { x: d, y: Math.sin(d) };
  });

  // Define the line
  const valueline = d3
    .line()
    .x(function (d) {
      return x(d.x);
    })
    .y(function (d) {
      return y(d.y);
    });

  // Add the valueline path
  svg
    .append("path")
    .data([sineData])
    .attr("class", "line")
    .attr("d", valueline)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2);
};

formalism();
