function Start(){
  var maze = new Maze(document, 'maze');
  maze.generate();
  GAME.maze = maze;
  GAME.started = true;
  GAME.maze.draw();
  DETECTIVE.currentCell = maze.getGenerator().graph.getCellAt(0, 0);
  //var x;
  //initializeDetective();

}
