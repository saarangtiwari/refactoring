import { Bike } from './refactored/bike';
import { Car } from './refactored/car';

const car = new Car();

console.log(car.getSpeed());

const bike = new Bike();
console.log(bike.getSpeed());
