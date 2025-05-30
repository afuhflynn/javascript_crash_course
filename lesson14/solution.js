// Solution

// Exercises in NOTES.md
// 1.
function Car(make, model) {
  this.make = make;
  this.model = model;
}
Car.prototype.getInfo = function () {
  return `${this.make} ${this.model}`;
};

// 2.
class CarClass {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getInfo() {
    return `${this.make} ${this.model}`;
  }
}

// 3.
class ElectricCar extends CarClass {
  constructor(make, model, batteryLevel) {
    super(make, model);
    this.batteryLevel = batteryLevel;
  }
  getInfo() {
    return `${super.getInfo()} - Battery: ${this.batteryLevel}%`;
  }
}

// 4
class ElectricCarUtil {
  static compare(a, b) {
    return a.batteryLevel - b.batteryLevel;
  }
}

// 5.
class SafeElectricCar extends CarClass {
  constructor(make, model, batteryLevel) {
    super(make, model);
    this._batteryLevel = batteryLevel;
  }
  get batteryLevel() {
    return this._batteryLevel;
  }
  set batteryLevel(val) {
    this._batteryLevel = Math.min(100, Math.max(0, val));
  }
}

// Exercises in Exercises.txt
// 1.
function Car(make, model) {
  this.make = make;
  this.model = model;
}
Car.prototype.getInfo = function () {
  return `${this.make} ${this.model}`;
};
const c1 = new Car("Ford", "Focus");
console.log(c1.getInfo());

// 2.
class CarClass {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getInfo() {
    return `${this.make} ${this.model}`;
  }
}
const c2 = new CarClass("BMW", "3 Series");
console.log(c2.getInfo());

// 3.
class ElectricCar extends CarClass {
  constructor(make, model, batteryLevel) {
    super(make, model);
    this.batteryLevel = batteryLevel;
  }
  getInfo() {
    return `${super.getInfo()} - Battery: ${this.batteryLevel}%`;
  }
}
const ec = new ElectricCar("Chevy", "Bolt", 60);
console.log(ec.getInfo());

// 4.
class ElectricCarUtil {
  static compareBattery(a, b) {
    return a.batteryLevel - b.batteryLevel;
  }
}
const ecA = new ElectricCar("A", "One", 30);
const ecB = new ElectricCar("B", "Two", 80);
console.log(ElectricCarUtil.compareBattery(ecA, ecB));

// 5.
class SafeElectricCar extends CarClass {
  constructor(make, model, batteryLevel) {
    super(make, model);
    this._batteryLevel = batteryLevel;
  }
  get batteryLevel() {
    return this._batteryLevel;
  }
  set batteryLevel(val) {
    this._batteryLevel = Math.min(100, Math.max(0, val));
  }
}
const sec = new SafeElectricCar("Leaf", "SV", 50);
sec.batteryLevel = 150;
console.log(sec.batteryLevel); // 100
