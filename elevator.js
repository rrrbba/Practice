// Write a function Elevator that will return an object when called with the ’new’ keyword.
// The returned object should have three properties:
// - id
// - currentFloor (1-10)
// - direction (up, down, idle)

// And the following methods
// - reportStatus - prints “Elevator #{id} is at floor {floor}. Moving {direction}” If moving or just idle if it’s idle.
// - moveToFloor(floor) - sets the floor to the passed in parameter and direction to ‘idle'

function Elevator(id, floor, direction){
    this.id = id;
    this.currentFloor = floor;
    this.direction = direction
}

Elevator.prototype.reportStatus = function(){
    let movingStatus = 'Idle';

    if(this.direction === 'up' || this.direction === 'down'){
        movingStatus = 'Moving' + this.direction;
    }
    console.log(`Elevator ${this.id} is at floor ${this.currentFloor}. ${movingStatus}`)
}

Elevator.prototype.moveToFloor = function(floor){
    this.currentFloor = floor;
    this.direction = 'idle';
}

const myElevator = new Elevator(1,4, 'down');

myElevator.reportStatus();