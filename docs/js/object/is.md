# is

```ts
function objectIs(x, y) {
  if (x === y) {
    // 对 +0 和 -0 进行特殊判断
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // 对 NaN 进行特殊判断
    return x !== x && y !== y;
  }
}

// 示例测试
console.log(Object.is(5, 5)); // true
console.log(Object.is(5, "5")); // false
console.log(Object.is(-0, 0)); // false

// 自定义实现的测试
console.log(objectIs(5, 5)); // true
console.log(objectIs(5, "5")); // false
console.log(objectIs(-0, 0)); // false
```
