# cache

```ts
function cachedFunction(x) {
  if (!cachedFunction.cache) {
    cachedFunction.cache = {};
  }

  if (!cachedFunction.cache[x]) {
    // 计算并存储结果
    cachedFunction.cache[x] = x + 10;
  }

  return cachedFunction.cache[x];
}

console.log(cachedFunction(5)); // 第一次计算并存储结果：15
console.log(cachedFunction(5)); // 直接返回存储的结果：15
```
