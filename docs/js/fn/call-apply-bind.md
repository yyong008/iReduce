# call-apply-bind

修改函数的作用域

## call

```ts
// call 函数接受一个上下文对象和任意数量的参数
Function.prototype.customCall = function (context, ...args) {
  // 将当前函数设为传入的上下文对象的一个属性
  context.fn = this;
  // 使用上下文对象来调用这个函数
  const result = context.fn(...args);
  // 删除这个函数属性，避免影响上下文对象
  delete context.fn;
  // 返回调用结果
  return result;
};
```

## apply

```ts
// apply 函数接受一个上下文对象和一个参数数组
Function.prototype.customApply = function (context, argsArray) {
  // 将当前函数设为传入的上下文对象的一个属性
  context.fn = this;
  // 使用上下文对象来调用这个函数，使用 apply 接收数组作为参数
  const result = context.fn(...argsArray);
  // 删除这个函数属性，避免影响上下文对象
  delete context.fn;
  // 返回调用结果
  return result;
};
```

## bind

```ts
// bind 函数接受一个上下文对象和任意数量的参数，返回一个绑定了指定上下文和参数的函数
Function.prototype.customBind = function (context, ...args) {
  const fn = this;
  // 返回一个新函数，该函数在调用时会将指定上下文和参数传递给原始函数
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};
```

## call apply 性能分析

`call` 和 `apply` 是 JavaScript 中用于调用函数的方法，它们允许你在调用函数时指定上下文和参数。

性能上，它们的主要区别在于参数的传递方式：

- `call` 接受一个上下文对象和一系列参数作为函数的参数列表。
- `apply` 接受一个上下文对象和一个参数数组作为函数的参数。

从性能角度来看：

1. **参数传递方式**：

   - `call` 将参数作为函数的连续参数传递，需要将参数一个个列举出来。
   - `apply` 将参数作为数组传递，因此在一些情况下可能更适合传递已经存在的数组参数。

2. **性能差异**：

   - 在传递少量参数时，通常情况下两者的性能差异不大。
   - 在参数较多时，`apply` 的性能可能稍差，因为它需要将参数打包成数组。但是，这个性能差异通常在现代 JavaScript 引擎中已经不太明显，因为引擎对于这些方法的实现已经进行了优化。

3. **使用场景**：
   - 如果已经有一个数组并且想将它作为函数的参数，`apply` 可能更直观和方便。
   - 如果已知参数的数量并且能够直接列举出来，使用 `call` 可能更直观。

一般来说，性能差异并不是很大，并且在大多数情况下不会成为代码性能的瓶颈。现代 JavaScript 引擎已经对这些方法进行了优化，使它们的性能差异几乎可以忽略不计。更重要的是，在选择使用 `call` 还是 `apply` 时，最好考虑代码的清晰度和可读性。

## 小结

js 中改变函数执行的作用域的场景十分常见。call-apply-bind 使得 JavaScript 编程更加的灵活，一个前端开发者需要了解前端开发其原理。
