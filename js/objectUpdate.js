// Update objects
function objectUpdate() {
  // Update time
  t += dt;

  // Test if canvas edges has been reached
  let x1c =
    canvasWidth *
    ((axisFraction * block1.pos.x) / axisRealLenght + 0.5 - 0.5 * axisFraction);
  let x2c =
    canvasWidth *
    ((axisFraction * block2.pos.x) / axisRealLenght + 0.5 - 0.5 * axisFraction);
  if (
    x1c <= 0 + blockWidth / 2 ||
    x1c >= canvasWidth - blockWidth / 2 ||
    x2c <= 0 + blockWidth / 2 ||
    x2c >= canvasWidth - blockWidth / 2
  ) {
    stopperState = "on";
  } else {
    stopperState = "off";
  }

  // Update only if block is still within the canvas
  if (stopperState == "off") {
    // Update objects
    block1.update();
    block2.update();

    // X Position plot - Block 1
    label =
      t.toFixed(2).toString() +
      "s" +
      ", " +
      block1.pos.x.toFixed(2).toString() +
      "m";
    plotXPos.points1.push(new GPoint(t, block1.pos.x, label));

    // X Position plot - Block 2
    label =
      t.toFixed(2).toString() +
      "s" +
      ", " +
      block2.pos.x.toFixed(2).toString() +
      "m";
    plotXPos.points2.push(new GPoint(t, block2.pos.x, label));

    // X Velocity plot - Block 1
    label =
      t.toFixed(2).toString() +
      "s" +
      ", " +
      block1.vel.x.toFixed(2).toString() +
      "m/s";
    plotXVel.points1.push(new GPoint(t, block1.vel.x, label));

    // X Velocity plot - Block 2
    label =
      t.toFixed(2).toString() +
      "s" +
      ", " +
      block2.vel.x.toFixed(2).toString() +
      "m/s";
    plotXVel.points2.push(new GPoint(t, block2.vel.x, label));
  }
}
