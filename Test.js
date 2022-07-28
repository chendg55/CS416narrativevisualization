//Import data
var data = d3.csv("https://raw.githubusercontent.com/chendg55/CS416narrativevisualization/gh-pages/COVID%202021%20USA.csv", d3.autoType);
console.log(data)
 
// Canvas size, margins, chart size
svg_width = 1500;
svg_height = 900;
const margin = { top: 30, bottom: 30, left: 60, right: 30 };
chart_width = svg_width - margin.left - margin.right;
chart_height = svg_height - margin.top - margin.bottom;

 
// Create scales
const x = d3.scaleTime().domain([new Date("2021-01-01"), new Date("2021-12-31")]).range([0, chart_width])
const y = d3.scaleLinear().domain([0, 34359601]).range([chart_height, 0])

// Line
const line = d3.line()
  .x(dataPoint => xScale(dataPoint.Date))
  .y(dataPoint => yScale(dataPoint.Confirmed));
  
// Add path
d3.select("svg")
  .append("path")
  .attr("transform", `translate(${margin.left},0)`)
  .datum(data)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-linejoin", "round")
  .attr("stroke-linecap", "round")
  .attr("stroke-width", 1.5)
  .attr("d", line);

// Add X axis
d3.select("svg").append("g")
 .attr("transform",`translate(${margin.left},${margin.top + chart_height})`)
 .call(d3.axisBottom(x));

// Add Y axis
d3.select("svg").append("g")
 .attr("transform",`translate(${margin.left},${margin.top})`)
 .call(d3.axisLeft(y));
