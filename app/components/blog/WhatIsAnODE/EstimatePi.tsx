'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
import { debounce } from 'lodash';

const EstimatePi: React.FC = () => {
  const [numPoints, setNumPoints] = useState(1000);
  const [duration, setDuration] = useState(1);
  const [debouncedNumPoints, setDebouncedNumPoints] = useState(numPoints);
  const [debouncedDuration, setDebouncedDuration] = useState(duration);
  const containerRef = useRef<HTMLDivElement>(null);

  const debounceSetNumPoints = useCallback(debounce(setDebouncedNumPoints, 300), []);
  const debounceSetDuration = useCallback(debounce(setDebouncedDuration, 300), []);

  useEffect(() => {
    debounceSetNumPoints(numPoints);
  }, [numPoints, debounceSetNumPoints]);

  useEffect(() => {
    debounceSetDuration(duration);
  }, [duration, debounceSetDuration]);

  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const width = 460 - margin.left - margin.right;
    const height = 460 - margin.top - margin.bottom;

    const xmin = -0.5;
    const xmax = 0.5;
    const ymin = xmin;
    const ymax = xmax;

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

    const scale = 1.01;
    const x = d3.scaleLinear().domain([scale * xmin, scale * xmax]).range([0, width]);
    const y = d3.scaleLinear().domain([scale * ymin, scale * ymax]).range([height, 0]);

    svg
      .append('g')
      .attr('transform', `translate(0, ${height / 2})`)
      .call(d3.axisBottom(x).tickValues([xmin, xmax]));

    svg
      .append('g')
      .attr('transform', `translate(${width / 2}, 0)`)
      .call(d3.axisLeft(y).tickValues([ymin, ymax]));

    svg
      .append('circle')
      .attr('cx', x(0))
      .attr('cy', y(0))
      .attr('r', y(0) - y(ymax))
      .attr('fill', 'red')
      .attr('fill-opacity', 0.2)
      .attr('stroke', 'red')
      .attr('stroke-width', 1);

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    const points = d3.range(debouncedNumPoints).map(() => ({ x: random(xmin, xmax), y: random(ymin, ymax) }));

    let inCircle = 0;

    const counter = svg
      .append('text')
      .attr('x', 0)
      .attr('y', -10) // Move the counter above the graph
      .attr('font-family', 'Arial')
      .attr('font-size', '14px')
      .attr('fill', 'black')
      .attr('background-color', 'white') // Add background color
      .attr('padding', '5px') // Add padding
      .text('Points inside: 0');

    points.forEach((point, i) => {
      setTimeout(() => {
        const inside = point.x ** 2 + point.y ** 2 <= 0.25;
        inCircle += inside ? 1 : 0;

        svg
          .append('circle')
          .attr('cx', x(point.x))
          .attr('cy', y(point.y))
          .attr('r', 2)
          .attr('fill', inside ? 'green' : 'blue');

        counter.text(`Points inside: ${inCircle}, Estimate: ${(4 * inCircle / (i + 1)).toFixed(6)}`);
      }, (i * debouncedDuration * 1000) / debouncedNumPoints);
    });
  }, [debouncedNumPoints, debouncedDuration]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <label style={{ flex: 1 }}>
          Number of Points: {numPoints}
        </label>
        <input
          type="range"
          min="100"
          max="10000"
          step="100"
          value={numPoints}
          onChange={(e) => setNumPoints(Number(e.target.value))}
          style={{ flex: 1 }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <label style={{ flex: 1 }}>
          Duration: {duration} seconds
        </label>
        <input
          type="range"
          min="0.1"
          max="10"
          step="0.1"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          style={{ flex: 1 }}
        />
      </div>
      <div ref={containerRef} />
    </div>
  );
};

export default EstimatePi;
