# memoize

```ts
function memoize(fn) {
  const cache = {};

  return function (x) {
    if (cache[x] === undefined) {
      cache[x] = fn(x);
    }
    return cache[x];
  };
}

// 斐波那契数列的递归实现
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 使用记忆优化斐波那契数列的计算
const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10)); // 55
console.log(memoizedFibonacci(10)); // 直接返回存储的结果：55
```
