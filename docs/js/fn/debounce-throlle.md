# 节流防抖

## 防抖 debounce

```ts
function debounce(func, delay) {
  let timeoutId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}
```

## 节流 throlle

```ts
function throttle(func, delay) {
  let timeoutId;
  return function () {
    const context = this;
    const args = arguments;
    if (!timeoutId) {
      timeoutId = setTimeout(function () {
        func.apply(context, args);
        timeoutId = null;
      }, delay);
    }
  };
}
```

## 小结

- 都使用闭包。
- 接受参数一致。
- 防抖是先清除定时器，直到某个时间段过去，执行了函数。
- 节流是先判断是否有定时器，没有定时器先添加一个，执行函数之后将定时器清除。
