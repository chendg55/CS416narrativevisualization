var data = [4,8,15,16,23,42];
x = d3.scaleBand().domain([0,1,2,3,4,5]).range([0, 200])
y = d3.scaleLinear().domain([0,42]).range([200, 0])

d3.select("svg").append("g")
 .attr("transform","translate(50,50)")
 .selectAll("rect")
 .data(data)
 .enter()
 .append("rect")
  .attr("x",function(d,i) {return 100*i/3;})
  .attr("y",function(d,i) {return (200-d/42*200);})
  .attr("width",(100/3))
  .attr("height",function(d,i) {return (d/42*200);});

d3.select("svg").append("g")
 .attr("transform","translate(50,50)")
 .call(d3.axisLeft(y));

d3.select("svg").append("g")
 .attr("transform","translate(50,250)")
 .call(d3.axisBottom(x));
