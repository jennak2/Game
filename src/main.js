function Start(){
  GAME.started = true;

  var maze = new Maze(document, 'maze');
  maze.generate();
  GAME.maze = maze;

  GAME.maze.draw();
  DETECTIVE.currentCell = maze.getGenerator().graph.getCellAt(0, 0);

  KILLER.currentCell = maze.getGenerator().graph.getCellAt(20, 20);
  KILLER.timer = 0;
  KILLER1.currentCell = maze.getGenerator().graph.getCellAt(20, 20);
  KILLER1.timer = 0;
  //var x;
  //initializeDetective();


}
