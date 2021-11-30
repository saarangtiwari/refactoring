class Vehicle {
  getSpeed(type: 'car' | 'bike') {
    switch (type) {
      case 'car': {
        return 4 * 10;
      }
      case 'bike': {
        return 2 * 10;
      }
    }
  }

  getExPow() {
    // do something
  }
}
