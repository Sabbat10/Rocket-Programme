let car = "T-sla";

let carB = car;
carB = "Toyota";

console.log(carB);
console.log(car);

let Car = {
  plaque: "xxx-xxx-xxx",
};

let CarB = { ...Car };
CarB.plaque = "yyy-xxx-yyy";

console.log(Car.plaque);
console.log(CarB.plaque);
