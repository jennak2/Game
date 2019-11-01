function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var ctx = canvas.getContext('2d');

  if (GAME.started) {

    // 1 - Reposition the objects
    //handleAirplaneMovement();

    // 2 - Clear the CANVAS
    ctx.clearRect(0, 0, 600, 300);

    // 3 draw the blood drops
      ctx.beginPath();
      ctx.lineWidth = "6";
      ctx.strokeStyle = "red";
      ctx.rect(COORD.x1, COORD.y1, 5, 5);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = "6";
      ctx.strokeStyle = "red";
      ctx.rect(COORD.x2, COORD.y2, 5, 5);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = "6";
      ctx.strokeStyle = "red";
      ctx.rect(COORD.x3, COORD.y3, 5, 5);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = "6";
      ctx.strokeStyle = "red";
      ctx.rect(COORD.x4, COORD.y4, 5, 5);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = "6";
      ctx.strokeStyle = "red";
      ctx.rect(COORD.x5, COORD.y5, 5, 5);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = "6";
      ctx.strokeStyle = "red";
      ctx.rect(COORD.x6, COORD.y6, 5, 5);
      ctx.stroke();

    // 3 - Draw new items


  } else {
    ctx.font = "30px Arial";
    ctx.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
