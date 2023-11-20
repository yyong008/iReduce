# Factory

```ts
// 工厂函数，根据参数创建不同类型的对象
function createVehicle(type) {
  if (type === "car") {
    return new Car();
  } else if (type === "bike") {
    return new Bike();
  } else if (type === "truck") {
    return new Truck();
  } else {
    throw new Error("Invalid vehicle type!");
  }
}

// 不同类型的对象构造函数
function Car() {
  this.vehicleType = "car";
  // 其他属性和方法...
}

function Bike() {
  this.vehicleType = "bike";
  // 其他属性和方法...
}

function Truck() {
  this.vehicleType = "truck";
  // 其他属性和方法...
}

// 使用工厂函数创建对象
const myCar = createVehicle("car");
const myBike = createVehicle("bike");
const myTruck = createVehicle("truck");
```
