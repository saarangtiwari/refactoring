import { Vehicle } from './vehicle';

export class Car extends Vehicle {
  getSpeed(): number {
    return 4 * 10;
  }

  getNumberOfWheels(): number {
    return 4;
  }

  testMovement() {
    this.move('forward');
    this.stop();
  }
}
