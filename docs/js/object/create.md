# create

```ts
if (!Object.create) {
  Object.create = function (proto) {
    // 参数检查
    if (typeof proto !== "object" && typeof proto !== "function") {
      throw new TypeError("Object prototype may only be an Object or null");
    }

    // 创建一个空函数
    function F() {}

    // 将新对象的原型设置为传入的原型对象
    F.prototype = proto;

    // 返回一个新对象，该对象的原型为传入的原型对象
    return new F();
  };
}
```
