// Function thet creates all objects
function objectCreation(p) {
  // Vertical position of axis and blocks
  let yAxis = canvasHeight * 0.5;
  let yBlock1 = canvasHeight * 0.42;
  let yBlock2 = canvasHeight * 0.32;

  // Create X axis
  xAxis = new Axis(
    p,
    (canvasWidth * (1 - axisFraction)) / 2,
    yAxis,
    axisFraction * canvasWidth,
    0,
    axisColor
  );

  // Create block 1
  block1 = new Block(
    p,
    0,
    yBlock1 - canvasHeight / 2,
    0,
    0,
    0,
    0,
    blockWidth,
    blockHeight,
    block1Color,
    block1ColorStroke
  );

  // Create block 2
  block2 = new Block(
    p,
    0,
    yBlock2 - canvasHeight / 2,
    0,
    0,
    0,
    0,
    blockWidth,
    blockHeight,
    block2Color,
    block2ColorStroke
  );

  // Create plots (x pos, x vel)
  plotXPos = new Plot(
    p,
    plotXPosXCoord,
    plotXPosYCoord,
    plotXPosWidth,
    plotXPosHeight,
    "t (s)",
    "x (m/s)",
    "Position vs temps"
  );
  plotXVel = new Plot(
    p,
    plotXVelXCoord,
    plotXVelYCoord,
    plotXVelWidth,
    plotXVelHeight,
    "t (s)",
    "v (m/s)",
    "Vitesse vs temps"
  );
}
