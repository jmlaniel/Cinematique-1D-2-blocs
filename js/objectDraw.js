// Draw function
//
function objectDraw() {
  // Draw Objects
  xAxis.draw();
  block1.draw();
  block2.draw();
  // Update plots
  if (plotDisplayStatus == "on") {
    plotXPos.draw();
    plotXVel.draw();
  }
}
