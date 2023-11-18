# 继承

## ES5

```ts
// 父类
function Animal(name) {
  this.name = name;
}

// 子类
function Dog(name, breed) {
  Animal.call(this, name); // 调用父类构造函数，继承属性
  this.breed = breed;
}

// 使用父类的原型创建子类的原型
Dog.prototype = Object.create(Animal.prototype);

// 将子类原型的构造函数指向子类本身
Dog.prototype.constructor = Dog;
```

## ES6

```ts
// 父类
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// 子类继承父类
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 调用父类构造函数，继承属性
    this.breed = breed;
  }
}
```
