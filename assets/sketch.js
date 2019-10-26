var one, power, collisions;
one = new Cube(1,0,100);
power = new Cube(1,-1,250);
collisions = 0;
while (cubeCollisionPossible(one,power) || wallCollisionPossible(one)) {
  if (wallCollisionPossible(one)) {
    collisions = collisions + 1;
    changeDirection(one);
  } else {
    collide(one,power);
    collisions = collisions + 1;
  }
}
function setup() {
  createCanvas(window.innerWidth * 7 / 10,window.innerHeight * 4 / 5);
  background(0);
  one.show()
  power.show()
}
console.log(collisions);
