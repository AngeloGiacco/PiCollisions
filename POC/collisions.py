# cube one with mass 1kg is stationary between a wall and a cube
#cube two has a mass that is a power of 100kg and is initially moving at -1 meters per second

class Cube():
    def __init__(self,m,v): #take mass, velocity and pos
        self.__mass = m
        self.__s = abs(v) #get speed from v
        self.__d = 1 if v >= 0 else -1 # direction is 1 for left to right, -1 for right to left

    def getMass(self):
        ''' return the mass attribute of a Cube object '''

        return self.__mass

    def getSpeed(self):
        ''' return the speed attribute of a Cube object '''

        return self.__s

    def getDirection(self):
        ''' return the direction attribute of a Cube object '''

        return self.__d

    def changeDirection(self):
        ''' change the direction attribute of a Cube object '''

        self.__d = -1 * self.__d

    def updateVelocity(self,v):
        ''' updates the values of speed and direction attributes for a cube object '''

        self.__s = abs(v) #get speed from v
        self.__d = 1 if v >= 0 else -1 # direction is 1 for left to right, -1 for right to left

def cubeCollisionPossible(c1,c2):
    ''' takes two cube objects and checks if they will collide '''

    if c2.getDirection() == 1 and c2.getSpeed() > c1.getSpeed():
        return False
    else:
        return True

def wallCollisionPossible(c1):
    ''' takes a cube object and checks if it will collide with the wall '''

    return True if c1.getDirection() == -1 else False

def collide(c1,c2):
    ''' calculates the velocities after collision of two cube objects '''
    m1 = float(c1.getMass())
    m2 = float(c2.getMass())
    v1 = float(c1.getSpeed() * c1.getDirection())
    v2 = float(c2.getSpeed() * c2.getDirection())
    v1f = (((m1-m2)/(m1+m2))*v1)+(((2*m2)/(m1+m2))*v2)#calculate final velocities
    v2f = (((2*m1)/(m1+m2))*v1)-(((m1-m2)/(m1+m2))*v2)
    c1.updateVelocity(v1f)
    c2.updateVelocity(v2f)

pidigits = int(input("[+] Enter number of digits of pi to be calculated: "))
one = Cube(1,0)
power = Cube(100**pidigits,-1)
collisions = 0
while cubeCollisionPossible(one,power) or wallCollisionPossible(one):
    if wallCollisionPossible(one):
        collisions += 1
        one.changeDirection()
    else:
        collide(one,power)
        collisions += 1

print("[+] "+str(collisions) + " collisions!")
