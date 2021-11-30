export abstract class Vehicle {
  move(direction: 'forward' | 'backward' | 'left' | 'right') {
    // do something
    console.log(direction);
  }

  stop() {
    // do something
    console.log('stopped');
  }

  abstract getNumberOfWheels(): number;

  abstract getSpeed(): number;

  getExPow() {
    // do something
  }
}
