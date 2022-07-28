var data = [4,8,15,16,23,42];
width = 1400;
height = 800;
x = d3.scaleBand().domain([0,1,2,3,4,5]).range([0, width]);
y = d3.scaleLinear().domain([0,42]).range([height, 0]);

d3.select("svg").append("g")
 .attr("transform","translate(50,50)")
 .selectAll("rect")
 .data(data)
 .enter()
 .append("rect")
  .attr("x",function(d,i) {return width*i/6;})
  .attr("y",function(d,i) {return (height-d/42*height);})
  .attr("width",(width/6))
  .attr("height",function(d,i) {return (d/42*height);});

d3.select("svg").append("g")
 .attr("transform","translate(50,50)")
 .call(d3.axisLeft(y));

d3.select("svg").append("g")
 .attr("transform","translate(50, height+50)")
 .call(d3.axisBottom(x));
