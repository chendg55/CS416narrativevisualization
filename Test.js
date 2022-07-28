// Set margins, chart size
const margin = { top: 30, bottom: 30, left: 60, right: 30 };
const width = 1500 - margin.left - margin.right;
const height = 900 - margin.top - margin.bottom;

// Append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Import data
d3.csv("https://raw.githubusercontent.com/chendg55/CS416narrativevisualization/gh-pages/COVID%202021%20USA.csv", function(d){
    return { Date : d3.timeParse("%Y-%m-%d")(d.Date), Confirmed : d.Confirmed, Deaths : d.Deaths }
    }).then(
    
    function(data) {

        // Add X axis
        const x = d3.scaleTime()
          .domain(d3.extent(data, function(d) { return d.Date; }))
          .range([0, width]);
        svg.append("g")
          .attr("transform", `translate(0, ${height})`)
          .call(d3.axisBottom(x));

        // Add Y axis
        const y = d3.scaleLinear()
          .domain([0, d3.max(data, function(d) { return +d.Confirmed; })])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));
          
        // Add line for cases
        svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 1.5)
          .attr("d", d3.line()
            .x(function(d) { return x(d.Date) })
            .y(function(d) { return y(d.Confirmed) }))
            
        // Add line for deaths
        svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "red")
          .attr("stroke-width", 1.5)
          .attr("d", d3.line()
            .x(function(d) { return x(d.Date) })
            .y(function(d) { return y(d.Deaths) }))
 
});
// Credit to https://d3-graph-gallery.com/graph/line_basic.html for finally making the lines work
