//create Cube class
function Cube(m,v,x) {
  this.mass = m;
  this.speed = Math.abs(v);
  this.direction = (v >= 0) ? 1 : -1;
  this.x = x;
  this.y = window.innerHeight * 4 / 5 - 50;

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

  this.getSpeed = function() {
    return this.speed;
  }

  this.getMass = function() {
    return this.mass;
  }

  this.getX = function() {
    return this.x;
  }

  this.show = function() {
    fill(0,255,255);
    rect(this.x, this.y, 60, 90);
  }
}

function cubeCollisionPossible(cube1,cube2) {
  //check if cubes will collide
  if ((getDirection(cube2) == 1) && (getSpeed(cube2) > getSpeed(cube1))) {
    return false;
  } else {
    return true;
  }
}

function wallCollisionPossible(cube1) {
  //check if cube 1 will hit wall
  if (getDirection(cube1) == -1) {
    return true;
  } else {
    return false;
  }
}

function collide(cube1,cube2) {
  let m1,m2,v1,v2,v1f,v2f
  m1 = getMass(cube1);
  m2 = getMass(cube2);
  v1 = getSpeed(cube1) * getDirection(cube1);
  v2 = getSpeed(cube2) * getDirection(cube2);
  v1f = (((m1-m2)/(m1+m2))*v1)+(((2*m2)/(m1+m2))*v2);
  v2f = (((2*m1)/(m1+m2))*v1)-(((m1-m2)/(m1+m2))*v2);
  updateVelocity(cube1,v1f);
  updateVelocity(cube2,v2f);
}
