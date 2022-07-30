    async function init() {
    // Hide buttons
    var b2 = document.getElementById("b2");
    b2.style.display = "none";
    var b3 = document.getElementById("b3");
    b3.style.display = "none";
    
    // Set margins, chart size
    const margin = { top: 30, bottom: 30, left: 60, right: 30 };
    const width = 640 - margin.left - margin.right;
    const height = 640 - margin.top - margin.bottom;

    // Append the svg object to the body of the page
    const svg = d3.select("#my_dataviz")
     .append("svg")
     .attr("width", width + margin.left + margin.right)
     .attr("height", height + margin.top + margin.bottom)
     .append("g")
     .attr("transform", `translate(${margin.left},${margin.top})`);

    // Import data
    data = await d3.csv("https://raw.githubusercontent.com/chendg55/CS416narrativevisualization/gh-pages/COVID%202021%20USA.csv", function(d){
        return { Date : d3.timeParse("%Y-%m-%d")(d.Date), Confirmed : d.Confirmed, Deaths : d.Deaths }
        });

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
    }
    
    function button_1() {
        // Clear svg
        d3.selectAll("svg").remove();
        
        // Hide/show buttons
        var b1 = document.getElementById("b1");
        b1.style.display = "none";
        var b2 = document.getElementById("b2");
        b2.style.display = "block";   
        
        // Set margins, chart size
        const margin = { top: 30, bottom: 30, left: 60, right: 30 };
        const width = 640 - margin.left - margin.right;
        const height = 640 - margin.top - margin.bottom;
    
        // Append the svg object to the body of the page
        const svg = d3.select("#my_dataviz")
         .append("svg")
         .attr("width", width + margin.left + margin.right)
         .attr("height", height + margin.top + margin.bottom)
         .append("g")
         .attr("transform", `translate(${margin.left},${margin.top})`);
         
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
            .attr("stroke-width", 3)
            .attr("d", d3.line()
                .x(function(d) { return x(d.Date) })
                .y(function(d) { return y(d.Confirmed) }));
                
        // Add label for cases
        svg.append("text")
            .attr("x", width - width / 24)
            .attr("y", -5)
            .attr("stroke", "steelblue")
            .attr("fill", "steelblue")
            .style("font-size", "20px")
            .style("text-anchor", "middle")
            .text("Cases");
    }    
    
    function button_2() {
        // Clear svg
        d3.selectAll("svg").remove();
        
        // Hide/show buttons
        var b2 = document.getElementById("b2");
        b2.style.display = "none";
        var b3 = document.getElementById("b3");
        b3.style.display = "block"; 
        
        // Set margins, chart size
        const margin = { top: 30, bottom: 30, left: 60, right: 30 };
        const width = 640 - margin.left - margin.right;
        const height = 640 - margin.top - margin.bottom;
    
        // Append the svg object to the body of the page
        const svg = d3.select("#my_dataviz")
         .append("svg")
         .attr("width", width + margin.left + margin.right)
         .attr("height", height + margin.top + margin.bottom)
         .append("g")
         .attr("transform", `translate(${margin.left},${margin.top})`);
         
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
            .attr("stroke-width", 3)
            .attr("d", d3.line()
                .x(function(d) { return x(d.Date) })
                .y(function(d) { return y(d.Confirmed) }));
                
        // Add label for cases
        svg.append("text")
            .attr("x", width - width / 24)
            .attr("y", -5)
            .attr("stroke", "steelblue")
            .attr("fill", "steelblue")
            .style("font-size", "20px")
            .style("text-anchor", "middle")
            .text("Cases");
              
        // Add line for deaths
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-width", 3)
            .attr("d", d3.line()
                .x(function(d) { return x(d.Date) })
                .y(function(d) { return y(d.Deaths) }));
                
        // Add label for deaths
        svg.append("text")
            .attr("x", width - width / 24)
            .attr("y", height - height / 20)
            .attr("stroke", "red")
            .attr("fill", "red")
            .style("font-size", "20px")
            .style("text-anchor", "middle")
            .text("Deaths");
    }
    
    function button_3() {
        // Data for rects
        var rect_x = [31,28,31,30,31,30,31,31,30,31,30,31]
        var rect_y = [6120765,8519424,10323364,12184268,13100040,13497999,14813292,19063682,23185494,25684022,28224536,34359601]
        
        // Clear svg
        d3.selectAll("svg").remove();
        
        // Set margins, chart size
        const margin = { top: 30, bottom: 30, left: 60, right: 30 };
        const width = 640 - margin.left - margin.right;
        const height = 640 - margin.top - margin.bottom;
    
        // Append the svg object to the body of the page
        const svg = d3.select("#my_dataviz")
         .append("svg")
         .attr("width", width + margin.left + margin.right)
         .attr("height", height + margin.top + margin.bottom)
         .append("g")
         .attr("transform", `translate(${margin.left},${margin.top})`);
         
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
            
        // Add rects
        svg.append("rect")
            .attr("id", "Jan")
            .attr("x", width / 365 * 0)
            .attr("y", height - rect_y[0] / 34359601 * height)
            .attr("width", width / 365 * rect_x[0])
            .attr("height", rect_y[0] / 34359601 * height);
            
        svg.append("rect")
            .attr("id", "Feb")
            .attr("x", width / 365 * 31)
            .attr("y", height - rect_y[1] / 34359601 * height)
            .attr("width", width / 365 * rect_x[1])
            .attr("height", rect_y[1] / 34359601 * height);
            
        svg.append("rect")
            .attr("id", "Mar")
            .attr("x", width / 365 * 59)
            .attr("y", height - rect_y[2] / 34359601 * height)
            .attr("width", width / 365 * rect_x[2])
            .attr("height", rect_y[2] / 34359601 * height);
            
        svg.append("rect")
            .attr("id", "Apr")
            .attr("x", width / 365 * 90)
            .attr("y", height - rect_y[3] / 34359601 * height)
            .attr("width", width / 365 * rect_x[3])
            .attr("height", rect_y[3] / 34359601 * height);
            
        svg.append("rect")
            .attr("id", "May")
            .attr("x", width / 365 * 120)
            .attr("y", height - rect_y[4] / 34359601 * height)
            .attr("width", width / 365 * rect_x[4])
            .attr("height", rect_y[4] / 34359601 * height);
            
        svg.append("rect")
            .attr("id", "Jun")
            .attr("x", width / 365 * 151)
            .attr("y", height - rect_y[5] / 34359601 * height)
            .attr("width", width / 365 * rect_x[5])
            .attr("height", rect_y[5] / 34359601 * height);
            
        svg.append("rect")
            .attr("id", "Jul")
            .attr("x", width / 365 * 181)
            .attr("y", height - rect_y[6] / 34359601 * height)
            .attr("width", width / 365 * rect_x[6])
            .attr("height", rect_y[6] / 34359601 * height);
            
        svg.append("rect")
            .attr("id", "Aug")
            .attr("x", width / 365 * 212)
            .attr("y", height - rect_y[7] / 34359601 * height)
            .attr("width", width / 365 * rect_x[7])
            .attr("height", rect_y[7] / 34359601 * height);
            
        svg.append("rect")
            .attr("id", "Sep")
            .attr("x", width / 365 * 243)
            .attr("y", height - rect_y[8] / 34359601 * height)
            .attr("width", width / 365 * rect_x[8])
            .attr("height", rect_y[8] / 34359601 * height);
            
        svg.append("rect")
            .attr("id", "Oct")
            .attr("x", width / 365 * 273)
            .attr("y", height - rect_y[9] / 34359601 * height)
            .attr("width", width / 365 * rect_x[9])
            .attr("height", rect_y[9] / 34359601 * height);
            
        svg.append("rect")
            .attr("id", "Nov")
            .attr("x", width / 365 * 304)
            .attr("y", height - rect_y[10] / 34359601 * height)
            .attr("width", width / 365 * rect_x[10])
            .attr("height", rect_y[10] / 34359601 * height);
            
        svg.append("rect")
            .attr("id", "Dec")
            .attr("x", width / 365 * 334)
            .attr("y", height - rect_y[11] / 34359601 * height)
            .attr("width", width / 365 * rect_x[11])
            .attr("height", rect_y[11] / 34359601 * height);
            
        // Add tooltips
        var tooltip_1 = d3.select("#my_dataviz")
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("font-size", "20px")
            .style("left", width / 4)
            .style("top", height / 4)
            .html("January <br> Cases: 6,120,765 <br> Deaths: 95,987 <br> Total Cases: 6,120,765 <br> Total Deaths: 95,987");
        d3.select("#Jan")
            .on("mouseover", function(){return tooltip_1.style("visibility", "visible");})
            .on("mouseout", function(){return tooltip_1.style("visibility", "hidden");});
            
        var tooltip_2 = d3.select("#my_dataviz")
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("font-size", "20px")
            .style("left", width / 4)
            .style("top", height / 4)
            .html("February <br> Cases: 2,398,659 <br> Deaths: 64,250 <br> Total Cases: 8,519,424 <br> Total Deaths: 160,237");
        d3.select("#Feb")
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible");})
            .on("mouseout", function(){return tooltip_2.style("visibility", "hidden");});
            
        var tooltip_3 = d3.select("#my_dataviz")
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("font-size", "20px")
            .style("left", width / 4)
            .style("top", height / 4)
            .html("March <br> Cases: 1,803,940 <br> Deaths: 36,686 <br> Total Cases: 10,323,364 <br> Total Deaths: 196,923");
        d3.select("#Mar")
            .on("mouseover", function(){return tooltip_3.style("visibility", "visible");})
            .on("mouseout", function(){return tooltip_3.style("visibility", "hidden");});
            
        var tooltip_4 = d3.select("#my_dataviz")
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("font-size", "20px")
            .style("left", width / 4)
            .style("top", height / 4)
            .html("April <br> Cases: 1,860,904 <br> Deaths: 23,726 <br> Total Cases: 12,184,268 <br> Total Deaths: 220,649");
        d3.select("#Apr")
            .on("mouseover", function(){return tooltip_4.style("visibility", "visible");})
            .on("mouseout", function(){return tooltip_4.style("visibility", "hidden");});
            
        var tooltip_5 = d3.select("#my_dataviz")
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("font-size", "20px")
            .style("left", width / 4)
            .style("top", height / 4)
            .html("May <br> Cases: 915,772 <br> Deaths: 18,133 <br> Total Cases: 13,100,040 <br> Total Deaths: 238,782");
        d3.select("#May")
            .on("mouseover", function(){return tooltip_5.style("visibility", "visible");})
            .on("mouseout", function(){return tooltip_5.style("visibility", "hidden");});
            
        var tooltip_6 = d3.select("#my_dataviz")
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("font-size", "20px")
            .style("left", width / 4)
            .style("top", height / 4)
            .html("June <br> Cases: 397,959 <br> Deaths: 10,513 <br> Total Cases: 13,497,999 <br> Total Deaths: 249,295");
        d3.select("#Jun")
            .on("mouseover", function(){return tooltip_6.style("visibility", "visible");})
            .on("mouseout", function(){return tooltip_6.style("visibility", "hidden");});
            
        var tooltip_7 = d3.select("#my_dataviz")
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("font-size", "20px")
            .style("left", width / 4)
            .style("top", height / 4)
            .html("July <br> Cases: 1,315,293 <br> Deaths: 8,799 <br> Total Cases: 14,813,292 <br> Total Deaths: 258,094");
        d3.select("#Jul")
            .on("mouseover", function(){return tooltip_7.style("visibility", "visible");})
            .on("mouseout", function(){return tooltip_7.style("visibility", "hidden");});
            
        var tooltip_8 = d3.select("#my_dataviz")
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("font-size", "20px")
            .style("left", width / 4)
            .style("top", height / 4)
            .html("August <br> Cases: 4,250,390 <br> Deaths: 28,576 <br> Total Cases: 19,063,682 <br> Total Deaths: 286,670");
        d3.select("#Aug")
            .on("mouseover", function(){return tooltip_8.style("visibility", "visible");})
            .on("mouseout", function(){return tooltip_8.style("visibility", "hidden");});
            
        var tooltip_9 = d3.select("#my_dataviz")
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("font-size", "20px")
            .style("left", width / 4)
            .style("top", height / 4)
            .html("September <br> Cases: 4,121,812 <br> Deaths: 59,977 <br> Total Cases: 23,185,494 <br> Total Deaths: 346,647");
        d3.select("#Sep")
            .on("mouseover", function(){return tooltip_9.style("visibility", "visible");})
            .on("mouseout", function(){return tooltip_9.style("visibility", "hidden");});
            
        var tooltip_10 = d3.select("#my_dataviz")
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("font-size", "20px")
            .style("left", width / 4)
            .style("top", height / 4)
            .html("October <br> Cases: 2,498,528 <br> Deaths: 48,017 <br> Total Cases: 25,684,022 <br> Total Deaths: 394,664");
        d3.select("#Oct")
            .on("mouseover", function(){return tooltip_10.style("visibility", "visible");})
            .on("mouseout", function(){return tooltip_10.style("visibility", "hidden");});
            
        var tooltip_11 = d3.select("#my_dataviz")
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("font-size", "20px")
            .style("left", width / 4)
            .style("top", height / 4)
            .html("November <br> Cases: 2,540,514 <br> Deaths: 34,264 <br> Total Cases: 28,224,536 <br> Total Deaths: 428,928");
        d3.select("#Nov")
            .on("mouseover", function(){return tooltip_11.style("visibility", "visible");})
            .on("mouseout", function(){return tooltip_11.style("visibility", "hidden");});
            
        var tooltip_12 = d3.select("#my_dataviz")
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("font-size", "20px")
            .style("left", width / 4)
            .style("top", height / 4)
            .html("December <br> Cases: 6,135,065 <br> Deaths: 43,509 <br> Total Cases: 34,359,601 <br> Total Deaths: 472,437");
        d3.select("#Dec")
            .on("mouseover", function(){return tooltip_12.style("visibility", "visible");})
            .on("mouseout", function(){return tooltip_12.style("visibility", "hidden");});
            
        // Add line for cases
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 3)
            .attr("d", d3.line()
                .x(function(d) { return x(d.Date) })
                .y(function(d) { return y(d.Confirmed) }));
                
        // Add label for cases
        svg.append("text")
            .attr("x", width - width / 24)
            .attr("y", -5)
            .attr("stroke", "steelblue")
            .attr("fill", "steelblue")
            .style("font-size", "20px")
            .style("text-anchor", "middle")
            .text("Cases");
              
        // Add line for deaths
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-width", 3)
            .attr("d", d3.line()
                .x(function(d) { return x(d.Date) })
                .y(function(d) { return y(d.Deaths) }));
                
        // Add label for deaths
        svg.append("text")
            .attr("x", width - width / 24)
            .attr("y", height - height / 20)
            .attr("stroke", "red")
            .attr("fill", "red")
            .style("font-size", "20px")
            .style("text-anchor", "middle")
            .text("Deaths");
    }
