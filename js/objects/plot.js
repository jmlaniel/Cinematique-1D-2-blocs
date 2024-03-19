// plotSketch
//
// Jacques M. Laniel, July 2021
//
function Plot(p, x0, y0, width, height, xlabel, ylabel, title) {
  let plot = [];
  let pointSize = 4;
  let fontColor = "Black";
  this.xlabel = xlabel;
  this.ylabel = ylabel;
  this.title = title;
  this.points1 = []; // points for 1st layer
  this.points2 = []; // points for 2nd layer

  // Create the plot
  plot = new GPlot(p);
  // Activate point labels
  plot.activatePointLabels();
  // Setup title
  plot.setTitleText(this.title);
  plot.title.fontColor = fontColor;
  plot.title.fontSize = fontSizeRegular;
  plot.title.fontName = fontName;
  // Setup x-axis
  plot.xAxis.setAxisLabelText(this.xlabel);
  plot.xAxis.fontColor = fontColor;
  plot.xAxis.lab.fontColor = fontColor;
  plot.xAxis.lab.fontSize = fontSizeSmall;
  plot.xAxis.lab.fontName = fontName;
  plot.xAxis.lineColor = fontColor;
  // Setup y-axis
  plot.yAxis.setAxisLabelText(this.ylabel);
  plot.yAxis.fontColor = fontColor;
  plot.yAxis.lineColor = fontColor;
  plot.yAxis.lab.fontSize = fontSizeSmall;
  plot.yAxis.lab.fontName = fontName;
  plot.yAxis.lab.fontColor = fontColor;
  // Set position
  plot.setPos(x0, y0);
  // Set plot dimension to fit canvas
  plot.setDim(width, height);

  // Setup block 1 graph (in main layer)
  plot.setPointColor("Blue");
  plot.setPointSize(pointSize);

  // Setup block 2 graphs
  plot.addLayer("Block2", this.points2);
  plot.getLayer("Block2").setPointColor("Red");
  plot.getLayer("Block2").setPointSize(pointSize);

  // Initialize function
  this.init = function () {
    this.points1 = [];
    this.points2 = [];
  };

  // Draw Function
  this.draw = function () {
    // Set the points
    plot.setPoints(this.points1);
    plot.getLayer("Block2").setPoints(this.points2);
    // Draw plot
    plot.beginDraw();
    plot.drawBox();
    plot.drawXAxis();
    plot.drawYAxis();
    plot.drawTitle();
    plot.drawGridLines(GPlot.BOTH);
    plot.drawLabels();
    plot.drawPoints();
    plot.endDraw();
  };
}
