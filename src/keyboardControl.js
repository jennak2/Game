var CONTROLS = {
  detective : {
    w : false,
    a : false,
    s : false,
    d : false
  }

};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "w":
      CONTROLS.detective.w = true;
      break;
    case "s":
      CONTROLS.detective.s = true;
      break;
    case "a":
      CONTROLS.detective.a = true;
      break;
    case "d":
      CONTROLS.detective.d = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "w":
      CONTROLS.detective.w = false;
      break;
    case "s":
      CONTROLS.detective.s = false;
      break;
    case "a":
      CONTROLS.detective.a = false;
      break;
    case "d":
      CONTROLS.detective.d = false;
      break;
    default:
      break;
  }
});
