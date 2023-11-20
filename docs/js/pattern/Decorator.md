# Decorator

```ts
// 装饰器函数
function log(target, key, descriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args) {
    console.log(`Calling ${key} with arguments ${args}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class MyClass {
  @log
  myMethod(arg1, arg2) {
    return arg1 + arg2;
  }
}

const instance = new MyClass();
instance.myMethod(10, 20); // 输出: Calling myMethod with arguments 10,20
```
