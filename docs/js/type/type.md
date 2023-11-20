# 类型判断

- 类型 typeof
- 类 instanceof
- 数组判断

## 类型判断

```ts
// 检查基本数据类型
typeof 42; // 返回 "number"
typeof "Hello"; // 返回 "string"
typeof true; // 返回 "boolean"
typeof undefined; // 返回 "undefined"
typeof NaN; // 返回 "number"
typeof BigInt("234"); // 返回 "bigint"

// 检查对象和函数
typeof null; // 返回 "object"
typeof {}; // 返回 "object"
typeof []; // 返回 "object" （数组被视为特殊类型的对象）
typeof Symbol(); // 返回 "symbol"
typeof function () {}; // 返回 "function"
const a = new Uint8Array();
typeof a; // 返回 "object"
```

## 类与实例

```ts
class Car {}
const myCar = new Car();

myCar instanceof Car; // 返回 true
myCar instanceof Object; // 返回 true，因为所有对象都是 Object 的实例
```

## 字符串

```ts
Object.prototype.toString.call([]); // 返回 "[object Array]"
Object.prototype.toString.call({}); // 返回 "[object Object]"
Object.prototype.toString.call(null); // 返回 "[object Null]"
Object.prototype.toString.call(undefined); // 返回 "[object Undefined]"
```

Object.prototype.toString.call 一定安全吗？不一定 [object Null] 可以被修改

- 方式1

```ts
Object.prototype.toString = function () {
  return "[object Changed]";
};
```

- 方式2

```ts
var o1 = { [Symbol.toStringTag]: "A" };
var o2 = { [Symbol.toStringTag]: null };

Object.prototype.toString.call(o1); // => "[object A]"
Object.prototype.toString.call(o2); // => "[object Object]"
```

## 数组

```ts
Array.isArray([]); // 返回 true
Array.isArray({}); // 返回 false
```

## 实现一个兼容性好的 Array 判断

```ts
var isArray = (function () {
  // 判断是否支持 Array.isArray 方法
  if (Array.isArray) {
    return Array.isArray;
  }

  // 针对多 iframe 环境
  var toString = Object.prototype.toString;
  var iframeArray = toString.call([]);
  return function (obj) {
    if (obj instanceof Array) {
      return true;
    }
    // 检查是否在 iframe 环境下
    return toString.call(obj) === iframeArray;
  };
})();

// 示例用法
console.log(isArray([])); // 输出: true
console.log(isArray([1, 2, 3])); // 输出: true
console.log(isArray({})); // 输出: false
console.log(isArray("Hello")); // 输出: false
```

## 小结

判断 JavaScript 类型有很多的方式。Object.prototype.toString.call 也不是绝对安全的，因为可以修改 toString 方法，也可以修改 `Symbol.toStringTag` 属性。数组判断提供了自己的判断方式，数组判断还有一种特殊的情况，iframe。因为 iframe 由自己的上下文环境。
