// practicals.js
// Practicals and explanations for OOP in JavaScript

// Constructor Function
function Car(make, model) {
  this.make = make;
  this.model = model;
}
Car.prototype.getInfo = function () {
  return `${this.make} ${this.model}`;
};
const car1 = new Car("Toyota", "Corolla");
console.log(car1.getInfo());

// ES6 Class
class CarClass {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getInfo() {
    return `${this.make} ${this.model}`;
  }
}
const car2 = new CarClass("Honda", "Civic");
console.log(car2.getInfo());

// Inheritance
class ElectricCar extends CarClass {
  constructor(make, model, battery) {
    super(make, model);
    this.batteryLevel = battery;
  }
  getInfo() {
    return `${super.getInfo()} with battery at ${this.batteryLevel}%`;
  }
}
const tesla = new ElectricCar("Tesla", "Model S", 85);
console.log(tesla.getInfo());

// Static Method
class CarUtil {
  static compareBattery(a, b) {
    return a.batteryLevel - b.batteryLevel;
  }
}
const carA = new ElectricCar("BrandA", "X", 50);
const carB = new ElectricCar("BrandB", "Y", 75);
console.log(CarUtil.compareBattery(carA, carB));

// Getters & Setters
class BatteryCar extends CarClass {
  constructor(make, model, battery) {
    super(make, model);
    this._batteryLevel = battery;
  }
  get batteryLevel() {
    return this._batteryLevel;
  }
  set batteryLevel(val) {
    this._batteryLevel = Math.min(100, Math.max(0, val));
  }
}
const bc = new BatteryCar("Nissan", "Leaf", 30);
bc.batteryLevel = 120;
console.log(bc.batteryLevel); // 100

// Private Fields
class Counter {
  #count = 0;
  increment() {
    this.#count++;
  }
  get value() {
    return this.#count;
  }
}
const cnt = new Counter();
cnt.increment();
console.log(cnt.value);
