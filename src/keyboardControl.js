var CONTROLS = {
  detective : {
    forward : false,
    back : false,
    rotateClockwise : false,
    rotateCounterClockwise : false,
    pickWeapon: false
  }

};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "w":
      CONTROLS.detective.forward = true;
      break;
    case "s":
      CONTROLS.detective.backward = true;
      break;
    case "a":
      CONTROLS.detective.rotateCounterClockwise = true;
      break;
    case "d":
      CONTROLS.detective.rotateClockwise = true;
      break;
    case "p":
      CONTROLS.detective.pickWeapon = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "w":
      CONTROLS.detective.forward = false;
      break;
    case "s":
      CONTROLS.detective.backward = false;
      break;
    case "a":
      CONTROLS.detective.rotateCounterClockwise = false;
      break;
    case "d":
      CONTROLS.detective.rotateClockwise = false;
      break;
    case "p":
      CONTROLS.detective.pickweapon = false;
      break;
    default:
      break;
  }
});
