'use client';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Formalism: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 20, left: 30 };
    const width = 460 - margin.left - margin.right;
    const height = 460 - margin.top - margin.bottom;

    const xmin = 0;
    const xmax = 2 * Math.PI;

    const container = d3.select(containerRef.current);
    container.selectAll('svg').remove();

    const svg = container
      .append('svg')
      .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('width', '100%')
      .attr('height', '100%')
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear().domain([xmin, xmax]).range([0, width]);
    const y = d3.scaleLinear().domain([-1, 1]).range([height, 0]);

    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    svg.append('g').call(d3.axisLeft(y));

    const sineData = d3.range(xmin, xmax, 0.01).map(d => ({ x: d, y: Math.sin(d) }));

    const valueline = d3
      .line()
      .x(d => x(d.x))
      .y(d => y(d.y));

    svg
      .append('path')
      .data([sineData])
      .attr('class', 'line')
      .attr('d', valueline)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2);
  }, []);

  return <div ref={containerRef} />;
};

export default Formalism;