<html>
  <script src='https://d3js.org/d3.v6.js'></script>
  <style> rect {fill: gray; stroke: black; stroke-width: 2}</style>
  <head>
    <meta charset="utf-8">
    <title>CS416 Narrative Visualization</title>
    <link href="Style.css" rel="stylesheet" type="text/css">
  </head>
  <body onload='init()'>
    <div class="center_text">
      <h1>USA COVID-19 Cases and Deaths in 2021</h1>
    </div>
    <div class="container" id="my_dataviz" style="width:1500px; height:900px;"></div>
    <button id="b1" class="center" onclick="button_1()">Cases</button>
    <button id="b2" class="center" onclick="button_2()">Deaths</button>
    <button id="b3" class="center" onclick="button_3()">Months</button>
    <script src="Chart.js" type="text/javascript"></script>
  </body>
</html>
