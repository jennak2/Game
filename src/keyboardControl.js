var CONTROLS = {
  detective : {
    w : false,
    a : false,
    s : false,
    d : false
  },
  pressing : false

};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "w":
      if (!CONTROLS.pressing) {
        CONTROLS.pressing = true;
        CONTROLS.detective.w = true;
      }
      break;
    case "s":
    if (!CONTROLS.pressing) {
      CONTROLS.pressing = true;
      CONTROLS.detective.s = true;
    }
      break;
    case "a":
    if (!CONTROLS.pressing) {
      CONTROLS.pressing = true;
      CONTROLS.detective.a = true;
    }
      break;
    case "d":
    if (!CONTROLS.pressing) {
      CONTROLS.pressing = true;
      CONTROLS.detective.d = true;
    }
      break;
    default:
    CONTROLS.detective.d = false;
    CONTROLS.detective.w = false;
    CONTROLS.detective.a = false;
    CONTROLS.detective.s = false;
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "w":
      CONTROLS.detective.w = false;
      CONTROLS.pressing = false;
      break;
    case "s":
      CONTROLS.detective.s = false;
      CONTROLS.pressing = false;
      break;
    case "a":
      CONTROLS.detective.a = false;
      CONTROLS.pressing = false;
      break;
    case "d":
      CONTROLS.detective.d = false;
      CONTROLS.pressing = false;
      break;
    default:
      break;
  }
});
