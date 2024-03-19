//-------------------------------------------------------------------------
// Control functions (running, pause, stop)
//-------------------------------------------------------------------------

// Start Simulation
function simRunning(p) {
  // initialize time
  t = 0;
  simPhase = "running"; // Set phase to running
  stopperState = "off"; // Set stopperState flag to off
  // Set coordinates and velocities to initial conditions
  objectInit(p);
  // Draw objects
  objectDraw();
}

// Pause simulation
function simPause(p) {
  switch (simPhase) {
    case "pause":
      simPhase = "running"; // Toggle pause for running
      break;
    case "running":
      simPhase = "pause"; // Toggle running for pause
      break;
  }
}

// Stop Simulation
function simStopping(p) {
  simPhase = "setup"; // Set phase to running
}

//-------------------------------------------------------------------------
// Inputs
//-------------------------------------------------------------------------

function guiText(p) {
  // General coordinates for gui text
  let x0 = 10;
  let y0 = 30;

  // Title
  let dx = 0;
  let dy = 0;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeBold);
  p.textStyle(p.BOLD);
  p.fill("black");
  p.text("Cinématique 1D - MUA à deux objets", x0, y0);

  // Titre Block 1 (Vert)
  dx = 10;
  dy = 30;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("Block Vert", x0, y0);

  // Block 1 X Position
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("x0 (m) :", x0, y0);

  // Block 1 X Velocity
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("vx0 (m/s) : ", x0, y0);

  // Block 1 X Acceleration
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("ax0 (m/s2) : ", x0, y0);

  // Titre Block 2 (Rouge)
  dx = 220;
  dy = -75;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("Block Rouge", x0, y0);

  // Block 2 X Position
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("x0 (m) : ", x0, y0);

  // Block 2 X Velocity
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("vx0 (m/s) : ", x0, y0);

  // Block 2 X Acceleration
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("ax0 (m/s2) : ", x0, y0);

  // Size in meters for the axis
  dx = 200;
  dy = -50;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("Longueur de l'axe (m) : ", x0, y0);

  // Axis label
  dx = 550;
  dy = 275;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeBold + 10);
  p.textStyle(p.BOLD);
  p.fill("black");
  p.text("x", x0, y0);

  // Credits
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("JML 2021", canvasWidth - 100, canvasHeight - 15);
}

function guiInputs(p) {
  // General coordinates for gui text
  let x0 = 125;
  let y0 = 44;

  // Input for x position - Block 1
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  x0Input1 = p.createInput(0);
  x0Input1.position(x0, y0);
  x0Input1.size(inputLength, inputHeight);
  x0Input1.style("accentColor", "black");
  x0Input1.style("text-align", "right");

  // Input for x velocity - Block 1
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  vx0Input1 = p.createInput(0);
  vx0Input1.position(x0, y0);
  vx0Input1.size(inputLength, inputHeight);
  vx0Input1.style("accentColor", "black");
  vx0Input1.style("text-align", "right");

  // Input for x acceleration - Block 1
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  axInput1 = p.createInput(0);
  axInput1.position(x0, y0);
  axInput1.size(inputLength, inputHeight);
  axInput1.style("accentColor", "black");
  axInput1.style("text-align", "right");

  // Input for x position - Block 2
  dx = 220;
  dy = -50;
  x0 += dx;
  y0 += dy;
  x0Input2 = p.createInput(0);
  x0Input2.position(x0, y0);
  x0Input2.size(inputLength, inputHeight);
  x0Input2.style("accentColor", "black");
  x0Input2.style("text-align", "right");

  // Input for x velocity - Block 2
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  vx0Input2 = p.createInput(0);
  vx0Input2.position(x0, y0);
  vx0Input2.size(inputLength, inputHeight);
  vx0Input2.style("accentColor", "black");
  vx0Input2.style("text-align", "right");

  // Input for x acceleration - Block 2
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  axInput2 = p.createInput(0);
  axInput2.position(x0, y0);
  axInput2.size(inputLength, inputHeight);
  axInput2.style("accentColor", "black");
  axInput2.style("text-align", "right");

  // Input for axis real lenght (in meters)
  dx = 300;
  dy = -50;
  x0 += dx;
  y0 += dy;
  axisRealLenghtInput = p.createInput(axisRealLenght);
  axisRealLenghtInput.position(x0, y0);
  axisRealLenghtInput.size(inputLength, inputHeight);
  axisRealLenghtInput.style("accentColor", "black");
  axisRealLenghtInput.style("text-align", "right");

  // Setup Run Button
  dx = -205;
  dy = 35;
  x0 += dx;
  y0 += dy;
  runButton = p.createButton("Démarrer");
  runButton.position(x0, y0);
  runButton.size(buttonLength, buttonHeight);
  runButton.style("font-family", fontName);
  runButton.mousePressed(function () {
    simRunning(p);
  });

  // Setup Pause Button
  dx = 1.1 * buttonLength;
  dy = 0;
  x0 += dx;
  y0 += dy;
  pauseButton = p.createButton("Pause");
  pauseButton.position(x0, y0);
  pauseButton.size(buttonLength, buttonHeight);
  pauseButton.style("font-family", fontName);
  pauseButton.mousePressed(function () {
    simPause(p);
  });

  // Setup Stop Button
  dx = 1.1 * buttonLength;
  dy = 0;
  x0 += dx;
  y0 += dy;
  stopButton = p.createButton("Arrêt");
  stopButton.position(x0, y0);
  stopButton.size(buttonLength, buttonHeight);
  stopButton.style("font-family", fontName);
  stopButton.mousePressed(function () {
    simStopping(p);
  });

  // Checkbox for displaying plots
  plotDisplayControl = p.createCheckbox("Affichage des graphiques", true);
  plotDisplayControl.position(800, 10);
  plotDisplayControl.style("font-family", fontName);
  plotDisplayControl.changed(plotDisplayStatusControl);
}

// Plot Display control function
function plotDisplayStatusControl() {
  if (this.checked()) {
    plotDisplayStatus = "on";
  } else {
    plotDisplayStatus = "off";
  }
}
