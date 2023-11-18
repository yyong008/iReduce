# new 关键字

```ts
function myNew(constructor, ...args) {
  // 创建一个新对象，该对象继承自构造函数的原型
  const newObj = Object.create(constructor.prototype);

  // 调用构造函数，并将新创建的对象作为上下文
  const result = constructor.apply(newObj, args);

  // 如果构造函数返回了对象，则返回该对象；否则返回新创建的对象
  return typeof result === "object" ? result : newObj;
}
```
