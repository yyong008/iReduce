# compose

```ts
// 实现 compose 函数
function compose(...funcs) {
  return function (value) {
    return funcs.reduceRight((acc, func) => func(acc), value);
  };
}

// 示例函数
function addTwo(x) {
  return x + 2;
}

function multiplyThree(x) {
  return x * 3;
}

function square(x) {
  return x * x;
}

// 创建一个组合函数
const composedFunction = compose(square, multiplyThree, addTwo);

// 调用组合函数
const result = composedFunction(3); // 3 + 2 = 5, 5 * 3 = 15, 15 * 15 = 225
console.log(result); // 输出结果为 225
```
