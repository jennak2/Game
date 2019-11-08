function handleDetectiveAnimation() {
  if (CONTROLS.detective.forward) {
    DETECTIVE.v = -2.5;
  }
  if (DETECTIVE.v != 0) {
    DETECTIVE.v += DETECTIVE.a;
    }

  if (CONTROLS.detective.backward){
    DETECTIVE.y += 2*DETECTIVE.v;
  }
    else{
      DETECTIVE.y += DETECTIVE.v;
    }


  if (CONTROLS.detective.rotateCounterClockwise) {
    DETECTIVE.x -= 4;
  }
  if (CONTROLS.detective.rotateClockwise) {
    DETECTIVE.x += 4;
  }

  // Check if asteroid is leaving the boundary, if so, switch sides
  if (DETECTIVE.x < 0) {
    DETECTIVE.x = 0;
  } else if (DETECTIVE.x >  GAME.canvas.width) {
    DETECTIVE.x = 600;
  } else if (DETECTIVE.y < 0) {
    DETECTIVE.y = 0;
  } else if (DETECTIVE.y > GAME.canvas.height) {
    DETECTIVE.y = 300;
  }
}

function renderDetective (ctx) {
  var canvas = document.getElementById('maze');
  var detectiveImage = new Image();
  detectiveImage.src = "detective-156961_960_720.png";
  ctx.drawImage(detectiveImage,1,1,25,25);
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
      // handleDetectiveAnimation();
    // 1 - Reposition the objects
    //handleAirplaneMovement();

    // 2 - Clear the CANVAS


    renderDetective(ctx);
    renderLight(ctx);


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
