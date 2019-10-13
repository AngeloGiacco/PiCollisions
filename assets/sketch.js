let one, power, collisions
one = Cube(1,0);
power = Cube(100,-1);
collisions = 0;
while (cubeCollisionPossible(one,power) || wallCollisionPossible(one)) {
  if (wallCollisionPossible(one)) {
    collisions = collisions + 1;
    one.changeDirection();
  } else {
    collide(one,power);
    collisions = collisions + 1;
  }
}
console.log(collisions);
