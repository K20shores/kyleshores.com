const basic_plot = (id, data) => {
  const margin = { top: 20, right: 20, bottom: 20, left: 30 };
  const width = 460 - margin.left - margin.right;
  const height = 460 - margin.top - margin.bottom;

  const xmin = -5;
  const xmax = 5;

  const _width = width + margin.left + margin.right;
  const _height = height + margin.top + margin.bottom;

  const svg = d3
    .select(id)
    .style("max-width", `${_width}px`)
    .style("max-width", `${_height}px`)
    .append("svg")
    .attr("viewBox", `0 0 ${_width} ${_height}`)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("width", "100%")
    .attr("height", "100%")
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Define the scales and axes
  const x = d3.scaleLinear().domain([xmin, xmax]).range([0, width]);
  const y = d3.scaleLinear().domain([-10, xmax]).range([height, 0]);

  // Add gridlines for both x and y axes
  svg
    .append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0, ${height})`)
    .call(
      d3
        .axisBottom(x)
        .tickSize(-height) // Draw grid lines extending across the height of the plot area
        .tickFormat("") // Remove axis labels for grid lines
    );

  svg.append("g").attr("class", "grid").call(
    d3
      .axisLeft(y)
      .tickSize(-width) // Draw grid lines extending across the width of the plot area
      .tickFormat("") // Remove axis labels for grid lines
  );

  d3.selectAll(".grid line").style("stroke-opacity", 0.1);

  // hide the top and right spines
  d3.selectAll(".grid .domain").style("stroke-opacity", 0.0);

  svg
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));

  svg.append("g").call(d3.axisLeft(y));
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
    .data([data])
    .attr("class", "line")
    .attr("d", valueline)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2);
};
