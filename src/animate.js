function handleDetectiveAnimation() {
  DETECTIVE.neighbors =  GAME.maze.getGenerator().graph.cellDisconnectedNeighbors(DETECTIVE.currentCell);
  var cellToAdd = null;
  if (CONTROLS.detective.d) {
    for (var i = 0; i < DETECTIVE.neighbors.length; i++){
      var c = DETECTIVE.neighbors[i];
      if (DETECTIVE.currentCell.getX() + 1== c.getX()){
      CONTROLS.detective.d = false;
        //DETECTIVE.latest.x += GAME.maze.getCellWidth();
        cellToAdd = c;
      }
    }
  }
  else if (CONTROLS.detective.w) {
    for (var i = 0; i < DETECTIVE.neighbors.length; i++){
      var c = DETECTIVE.neighbors[i];
      if (DETECTIVE.currentCell.getY() - 1== c.getY()){
        CONTROLS.detective.w = false;
        //DETECTIVE.latest.y = GAME.maze.getCellHeight();
        cellToAdd = c;
      }
    }
  }
  else if (CONTROLS.detective.a) {
    for (var i = 0; i < DETECTIVE.neighbors.length; i++){
      var c = DETECTIVE.neighbors[i];
      if (DETECTIVE.currentCell.getX() - 1== c.getX()){
        //DETECTIVE.latest.x -= GAME.maze.getCellWidth();
        CONTROLS.detective.a = false;
        cellToAdd = c;
      }
    }
  }
  else if (CONTROLS.detective.s) {
    for (var i = 0; i < DETECTIVE.neighbors.length; i++){
      var c = DETECTIVE.neighbors[i];
      if (DETECTIVE.currentCell.getY() + 1== c.getY()){
        CONTROLS.detective.s = false;
        //DETECTIVE.latest.y += GAME.maze.getCellHeight();
        cellToAdd = c;
      }
    }
  }
  if (cellToAdd != null){
    DETECTIVE.currentCell = cellToAdd;
  }
  DETECTIVE.latest.y = DETECTIVE.currentCell.getY() * GAME.maze.getCellHeight() + 5;
  DETECTIVE.latest.x = DETECTIVE.currentCell.getX() * GAME.maze.getCellWidth() + 5;


}
function handleKillerAnimation() {
  if (KILLER.timer == 0){
    KILLER.timer = 20;
    KILLER.neighbors =  GAME.maze.getGenerator().graph.cellDisconnectedNeighbors(KILLER.currentCell);
    var cellToAdd = null;
    KILLER.direction = Math.floor(Math.random() * 4);
    if (KILLER.direction == 0) {
      for (var i = 0; i < KILLER.neighbors.length; i++){
        var c = KILLER.neighbors[i];
        if (KILLER.currentCell.getX() + 1== c.getX()){
          cellToAdd = c;
        }
      }
    }
    else if (KILLER.direction ==1) {
      for (var i = 0; i < KILLER.neighbors.length; i++){
        var c = KILLER.neighbors[i];
        if (KILLER.currentCell.getY() - 1== c.getY()){
          cellToAdd = c;
        }
      }
    }
    else if (KILLER.direction == 2) {
      for (var i = 0; i < KILLER.neighbors.length; i++){
        var c = KILLER.neighbors[i];
        if (KILLER.currentCell.getX() - 1== c.getX()){
          cellToAdd = c;
        }
      }
    }
    else if (KILLER.direction == 3) {
      for (var i = 0; i < KILLER.neighbors.length; i++){
        var c = KILLER.neighbors[i];
        if (KILLER.currentCell.getY() + 1== c.getY()){
          cellToAdd = c;
        }
      }
    }
    if (cellToAdd != null){
      KILLER.currentCell = cellToAdd;
    }
    KILLER.latest.y = KILLER.currentCell.getY() * GAME.maze.getCellHeight() + 5;
    KILLER.latest.x = KILLER.currentCell.getX() * GAME.maze.getCellWidth() + 5;
  }
  else{
    KILLER.timer --;
  }
}
function handleKiller1Animation() {
  if (KILLER1.timer == 0){
    KILLER1.timer = 20;
    KILLER1.neighbors =  GAME.maze.getGenerator().graph.cellDisconnectedNeighbors(KILLER.currentCell);
    var cellToAdd = null;
    KILLER1.direction = Math.floor(Math.random() * 4);
    if (KILLER1.direction == 0) {
      for (var i = 0; i < KILLER1.neighbors.length; i++){
        var c = KILLER1.neighbors[i];
        if (KILLER1.currentCell.getX() + 1== c.getX()){
          cellToAdd = c;
        }
      }
    }
    else if (KILLER1.direction ==1) {
      for (var i = 0; i < KILLER1.neighbors.length; i++){
        var c = KILLER1.neighbors[i];
        if (KILLER1.currentCell.getY() - 1== c.getY()){
          cellToAdd = c;
        }
      }
    }
    else if (KILLER1.direction == 2) {
      for (var i = 0; i < KILLER1.neighbors.length; i++){
        var c = KILLER1.neighbors[i];
        if (KILLER1.currentCell.getX() - 1== c.getX()){
          cellToAdd = c;
        }
      }
    }
    else if (KILLER1.direction == 3) {
      for (var i = 0; i < KILLER1.neighbors.length; i++){
        var c = KILLER1.neighbors[i];
        if (KILLER1.currentCell.getY() + 1== c.getY()){
          cellToAdd = c;
        }
      }
    }
    if (cellToAdd != null){
      KILLER1.currentCell = cellToAdd;
    }
    KILLER1.latest.y = KILLER1.currentCell.getY() * GAME.maze.getCellHeight() + 5;
    KILLER1.latest.x = KILLER1.currentCell.getX() * GAME.maze.getCellWidth() + 5;
  }
  else{
    KILLER1.timer --;
  }
}
function renderDetective (ctx) {
  var detectiveImage = new Image();
  detectiveImage.src = "detective-156961_960_720.png";
  ctx.drawImage(detectiveImage,DETECTIVE.latest.x,DETECTIVE.latest.y,10,10);
}
function renderKiller (ctx) {
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillRect(KILLER.latest.x, KILLER.latest.y, 10, 10);
  ctx.stroke();

}
function renderKiller1 (ctx) {
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillRect(KILLER1.latest.x, KILLER1.latest.y, 10, 10);
  ctx.stroke();

}
function renderLight (ctx) {
  var canvas = document.getElementById('maze');
  var lightImage = new Image();
  lightImage.src = "download.jpg";
  ctx.drawImage(lightImage,LIGHT.x,LIGHT.y,25,25);

}
function runGame() {

  var canvas = document.getElementById('maze');
  var ctx = canvas.getContext('2d');
//  ctx.clearRect(0, 0, 600, 300);


  if (GAME.started) {
   ctx.clearRect(DETECTIVE.latest.x, DETECTIVE.latest.y, 10, 10);
   ctx.clearRect(KILLER.latest.x, KILLER.latest.y, 10, 10);
    handleDetectiveAnimation();
    handleKillerAnimation();
    handleKiller1Animation();
    // 1 - Reposition the objects
    //handleAirplaneMovement();

    // 2 - Clear the CANVAS


    renderDetective(ctx);
    renderKiller(ctx);
    renderKiller1(ctx);
    renderLight(ctx);


    // 3 draw the blood drops


      ctx.beginPath();
      ctx.lineWidth = "6";
      ctx.strokeStyle = "red";
      ctx.rect(COORD.x1, COORD.y1, 5, 5);
      ctx.rect(COORD.x2, COORD.y2, 5, 5);
      ctx.rect(COORD.x3, COORD.y3, 5, 5);
      ctx.rect(COORD.x4, COORD.y4, 5, 5);
      ctx.rect(COORD.x5, COORD.y5, 5, 5);
      ctx.rect(COORD.x6, COORD.y6, 5, 5);

      //ctx.strokeStyle = "white";
      ctx.lineWidth = "10";
//      ctx.rect(130, 190, 100, 10);
      ctx.stroke();
      if (DETECTIVE.currentCell != null){
        //ctx.fillText("t: " +KILLER.timer, 135, 200);
      }
      if(KILLER.latest.y == DETECTIVE.latest.y && KILLER.latest.x ==DETECTIVE.latest.x){
          GAME.started = false;
      }
      if(DETECTIVE.latest.x == 585 && DETECTIVE.latest.y == 585){
        GAME.started = false;
      }

  } else {
    //ctx.clearRect(0, 0, 600, 300);
    if(DETECTIVE.latest.y==585 && DETECTIVE.latest.x==585){
      ctx.font = "30px Arial";
      ctx.fillText("you won!     Level" + GAME.level, 135, 200);
    }
    if(KILLER.latest.y == DETECTIVE.latest.y && KILLER.latest.x ==DETECTIVE.latest.x && GAME.maze!=null){
      ctx.font = "30px Arial";
      ctx.fillText("you lost!    Level" + GAME.level, 135, 200);
      GAME.level++;
    }


  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
