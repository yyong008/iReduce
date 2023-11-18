# instanceof

```ts
function myInstanceOf(obj, constructor) {
  // 检查是否是对象
  if (typeof obj !== "object" || obj === null) {
    return false;
  }

  // 获取对象的原型
  let prototype = Object.getPrototypeOf(obj);

  // 迭代地检查原型链
  while (prototype !== null) {
    // 检查原型链上的构造函数是否匹配
    if (prototype === constructor.prototype) {
      return true;
    }
    // 继续沿着原型链向上查找
    prototype = Object.getPrototypeOf(prototype);
  }

  return false;
}
```
