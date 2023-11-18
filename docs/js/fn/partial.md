# Partial

```ts
// 实现一个简单的偏函数
function partial(func, ...partialArgs) {
  return function (...args) {
    return func.apply(this, partialArgs.concat(args));
  };
}

// 示例函数
function multiply(x, y) {
  return x * y;
}

// 创建一个偏函数，固定其中一个参数为 2
const partialMultiplyByTwo = partial(multiply, 2);

// 调用偏函数
console.log(partialMultiplyByTwo(5)); // 输出结果为 10
```
