//create Cube class
function Cube(m,v) {
  this.mass = m;
  this.speed = Math.abs(v);
  this.direction = (v >= 0) ? 1 : -1;

  this.changeDirection = function() {
    this.direction = this.direction * -1;
  }

  this.updateVelocity = function(v) {
    this.speed = Math.abs(v);
    this.direction = (v >= 0) ? 1 : -1;
  }

  this.getDirection = function() {
    return this.direction;
  }
}

function cubeCollisionPossible(cube1,cube2) {
  //check if cubes will collide
  if ((cube2.direction == 1) && (cube2.speed > cube1.speed)) {
    return false;
  } else {
    return true;
  }
}

function wallCollisionPossible(cube1) {
  //check if cube 1 will hit wall
  if (cube1.direction == -1) {
    return true;
  } else {
    return false;
  }
}

function collide(cube1,cube2) {
  let m1,m2,v1,v2,v1f,v2f
  m1 = cube1.mass;
  m2 = cube2.mass;
  v1 = cube1.speed * cube1.direction;
  v2 = cube2.speed * cube2.direction;
  v1f = (((m1-m2)/(m1+m2))*v1)+(((2*m2)/(m1+m2))*v2);
  v2f = (((2*m1)/(m1+m2))*v1)-(((m1-m2)/(m1+m2))*v2);
  cube1.updateVelocity(v1f);
  cube2.updateVelocity(v2f);
}
