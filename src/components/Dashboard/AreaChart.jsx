// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';
// import './AreaChart.css'; // Make sure to style the chart

// const AreaChart = ({ data }) => {
//   const svgRef = useRef();

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);
//     const { width, height } = svg.node().getBoundingClientRect();

//     // Set the margins and dimensions
//     const margin = { top: 20, right: 30, bottom: 30, left: 40 };
//     const innerWidth = width - margin.left - margin.right;
//     const innerHeight = height - margin.top - margin.bottom;

//     // Clear previous render
//     svg.selectAll('*').remove();

//     // Set the scales
//     const xScale = d3.scaleTime()
//       .domain(d3.extent(data, d => new Date(d.start_year)))
//       .range([0, innerWidth]);

//     const yScale = d3.scaleLinear()
//       .domain([0, d3.max(data, d => d.intensity)])
//       .range([innerHeight, 0]);

//     const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

//     // Define the area generator
//     const areaGenerator = d3.area()
//       .x(d => xScale(new Date(d.start_year)))
//       .y0(innerHeight)
//       .y1(d => yScale(d.intensity))
//       .curve(d3.curveBasis);

//     const g = svg.append('g')
//       .attr('transform', `translate(${margin.left},${margin.top})`);

//     g.append('path')
//       .datum(data)
//       .attr('fill', 'purple')
//       .attr('d', areaGenerator);

//     // Add the axes
//     g.append('g')
//       .call(d3.axisLeft(yScale));

//     g.append('g')
//       .attr('transform', `translate(0,${innerHeight})`)
//       .call(d3.axisBottom(xScale));

//   }, [data]);

//   return (
//     <svg ref={svgRef} style={{ width: '100%', height: '500px' }}></svg>
//   );
// };

// export default AreaChart;


// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';
// import './AreaChart.css';

// const AreaChart = ({ data }) => {
//   const svgRef = useRef();

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);
//     const { width, height } = svg.node().getBoundingClientRect();

//     const margin = { top: 20, right: 30, bottom: 30, left: 40 };
//     const innerWidth = width - margin.left - margin.right;
//     const innerHeight = height - margin.top - margin.bottom;

//     svg.selectAll('*').remove();

//     const xScale = d3.scaleTime()
//       .domain(d3.extent(data, d => new Date(d.start_year)))
//       .range([0, innerWidth]);

//     const yScale = d3.scaleLinear()
//       .domain([0, d3.max(data, d => d.intensity)])
//       .range([innerHeight, 0]);

//     const areaGenerator = d3.area()
//       .x(d => xScale(new Date(d.start_year)))
//       .y0(innerHeight)
//       .y1(d => yScale(d.intensity))
//       .curve(d3.curveBasis);

//     const g = svg.append('g')
//       .attr('transform', `translate(${margin.left},${margin.top})`);

//     g.append('path')
//       .datum(data)
//       .attr('fill', 'purple')
//       .attr('d', areaGenerator);

//     g.append('g')
//       .call(d3.axisLeft(yScale));

//     g.append('g')
//       .attr('transform', `translate(0,${innerHeight})`)
//       .call(d3.axisBottom(xScale));
//   }, [data]);

//   return (
//     <svg ref={svgRef} style={{ width: '100%', height: '500px' }}></svg>
//   );
// };

// export default AreaChart;


import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './AreaChart.css';

const AreaChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    console.log("AreaChart data:", data);

    const svg = d3.select(svgRef.current);
    const { width, height } = svg.node().getBoundingClientRect();

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg.selectAll('*').remove();

    const xScale = d3.scaleTime()
      .domain(d3.extent(data, d => d.start_year ? new Date(d.start_year) : new Date()))
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.intensity)])
      .range([innerHeight, 0]);

    const areaGenerator = d3.area()
      .x(d => xScale(d.start_year ? new Date(d.start_year) : new Date()))
      .y0(innerHeight)
      .y1(d => yScale(d.intensity))
      .curve(d3.curveBasis);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    g.append('path')
      .datum(data)
      .attr('fill', 'purple')
      .attr('d', areaGenerator);

    g.append('g')
      .call(d3.axisLeft(yScale));

    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale));
  }, [data]);

  return (
    <svg ref={svgRef} style={{ width: '100%', height: '500px' }}></svg>
  );
};

export default AreaChart;
