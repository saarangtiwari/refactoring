import { Vehicle } from './vehicle';

export class Bike extends Vehicle {
  getSpeed(): number {
    return 2 * 10;
  }

  getNumberOfWheels(): number {
    return 2;
  }

  testMovement() {
    this.move('forward');
    this.stop();
  }
}
