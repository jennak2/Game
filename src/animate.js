function handleDetectiveAnimation() {
  /*if (CONTROLS.detective.w) {
  }
  if (CONTROLS.detective.a){
  }
  if (CONTROLS.detective.s) {
  }
  if (CONTROLS.detective.d) {
  }

  // Check if asteroid is leaving the boundary, if so, switch sides
  if (DETECTIVE.latest.x < 0) {
    DETECTIVE.latest.x = 0;
  } else if (DETECTIVE.latest.x >  575) {
    DETECTIVE.latest.x = 575;
  } else if (DETECTIVE.latest.y < 0) {
    DETECTIVE.latest.y = 0;
  } else if (DETECTIVE.latest.y > 575) {
    DETECTIVE.latest.y = 575;
  }*/
  DETECTIVE.latest.x = DETECTIVE.currentCell.x + 5;
  DETECTIVE.latest.y = DETECTIVE.currentCell.y + 5;
}

function renderDetective (ctx) {
  var canvas = document.getElementById('maze');
  var detectiveImage = new Image();
  detectiveImage.src = "detective-156961_960_720.png";
ctx.drawImage(detectiveImage,DETECTIVE.latest.x,DETECTIVE.latest.y,10,10);
}

function runGame() {
  var canvas = document.getElementById('maze');
  var ctx = canvas.getContext('2d');
  //ctx.clearRect(0, 0, 600, 300);

function renderLight (ctx) {
  var canvas = document.getElementById('maze');
  var lightImage = new Image();
  lightImage.src = "download.jpg";
  ctx.drawImage(lightImage,LIGHT.x,LIGHT.y,25,25);
}

  if (GAME.started) {
   ctx.clearRect(DETECTIVE.latest.x, DETECTIVE.latest.y, 10, 10);
    handleDetectiveAnimation();
    // 1 - Reposition the objects
    //handleAirplaneMovement();

    // 2 - Clear the CANVAS


    renderDetective(ctx);
    renderLight(ctx);


    // 3 draw the blood drops

      ctx.fillText("x: " + DETECTIVE.latest.x + " y: " + DETECTIVE.latest.y + " a: " + DETECTIVE.latest.a +" v: " + DETECTIVE.latest.v, 135, 200);
      ctx.beginPath();
      ctx.lineWidth = "6";
      ctx.strokeStyle = "red";
      ctx.rect(COORD.x1, COORD.y1, 5, 5);
      ctx.rect(COORD.x2, COORD.y2, 5, 5);
      ctx.rect(COORD.x3, COORD.y3, 5, 5);
      ctx.rect(COORD.x4, COORD.y4, 5, 5);
      ctx.rect(COORD.x5, COORD.y5, 5, 5);
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
