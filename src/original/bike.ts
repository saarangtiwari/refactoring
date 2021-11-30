class Bike {
  move(direction: 'forward' | 'backward' | 'left' | 'right') {
    // do something
    console.log(direction);
  }

  stop() {
    // do something
    console.log('stopped');
  }

  getNumberOfWheels() {
    return 2;
  }
}
