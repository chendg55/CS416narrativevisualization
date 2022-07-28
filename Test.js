async function init() {
// Import data
var data = await d3.csv("COVID 2021 USA.csv");
 
// Canvas size, margins, chart size
svg_width = 1500;
svg_height = 900;
const margin = { top: 30, bottom: 30, left: 30, right: 30 };
chart_width = svg_width - margin.left - margin.right;
chart_height = svg_height - margin.top - margin.bottom;
 
// Create scales
var x = d3.scaleTime()
          .domain(d3.extent(data.Date, function(d) { return new Date(d.date); }))
          .range([0, chart_width]);
var y = d3.scaleLinear().domain([0, d3.max(data.Cases)]).range([chart_height, 0]);

// Line


// Add Y axis
d3.select("svg").append("g")
 .attr("transform",`translate(${margin.left},${margin.top})`)
 .call(d3.axisLeft(y));

// Add X axis
d3.select("svg").append("g")
 .attr("transform",`translate(${margin.left},${margin.top + chart_height})`)
 .call(d3.axisBottom(x));
}
