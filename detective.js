// Populate a global variable for the spaceship
function initializeDetective() {
  var canvas = document.getElementById('mainCanvas');
  var ctx = canvas.getContext('2d');
  ctx.scale(1,1);




  DETECTIVE = {
    x : 300,
    y : 150,
    v: 0,
    a: .06,
      {
        x : 0,
       	y : 3
      },
      {
        x : 2,
       	y : -3
      },
      {
        x : 0,
       	y : 0
      },
      {
        x : -2,
       	y : -3
      },
      {
        x : 0,
       	y : 3
      }
    ],
    latest : {
        x : DETECTIVE.x,
        y : DETECTIVE.y,
    },
    intialized: true,
    scale : 5,
    speed : 3
  };
}

// Rotate rotates a point around
// cx, cy   :   The central point
// x, y     :   The coordinates of point to be rotatedPoint
// angle    :   Angle in degrees of rotation
function Rotate(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}

// RotateAroundOrigin
// x, y     :   The coordinates of point to be rotatedPoint
// angle    :   Angle in degrees of rotation
function RotateAroundOrigin(x, y, angle) {
  return Rotate(0, 0, x, y, angle);
}

/**  RenderSpaceship
 *
 *  Renders all spaceship points after adjusting them for the rotation and position
 *    in space
 */
function RenderDetective(ctx) {
  if (!DETECTIVE.initialized) {
    return;
  }

  // Move to the point where drawing will start
  var rotatedPoint = RotateAroundOrigin(
    DETECTIVE.positions[0].x,
    DETECTIVE.positions[0].y,
    DETECTIVE.rotation
  );
  context.moveTo(DETECTIVE.x + rotatedPoint[0],DETECTIVE.y +  rotatedPoint[1]);
  DETECTIVE.latest.x = DETECTIVE.x + rotatedPoint[0];
  DETECTIVE.latest.y = DETECTIVE.y + rotatedPoint[1];
  // Begin rendering the space ship points (rotating them each time)
  context.beginPath();
  for (var i = 0; i < DETECTIVE.positions.length; i++) {
    var rotatedPoint = RotateAroundOrigin(
      DETECTIVE.positions[i].x,
      DETECTIVE.positions[i].y,
      DETECTIVE.rotation
    );
    context.lineTo(
      DETECTIVE.x + (rotatedPoint[0] * DETECTIVE.scale),
      DETECTIVE.y + (rotatedPoint[1] * DETECTIVE.scale)
    );
  }
  context.lineWidth = 1;
  switch (DETECTIVE.health) {
    case 3:
      context.strokeStyle = 'green';
      break;
    case 2:
      context.strokeStyle = 'blue';
      break;
    case 1:
      context.strokeStyle = 'orange';
      break;
    case 0:
      context.strokeStyle = 'red';
      break;
    default:
      context.strokeStyle = 'white';
      break;
  }
  context.stroke();
}
