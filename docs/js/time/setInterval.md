# setInterval

```javascript
function simulatedSetInterval(func, delay) {
  function interval() {
    func();
    setTimeout(interval, delay);
  }
  setTimeout(interval, delay);
}

// 示例函数
function sayHello() {
  console.log("Hello, simulated setInterval!");
}

// 使用模拟的 setInterval 每隔一段时间调用函数
simulatedSetInterval(sayHello, 2000); // 每隔 2 秒执行一次 sayHello 函数
```

在这个例子中，`simulatedSetInterval` 函数接受一个函数和一个延迟时间作为参数。它定义了一个内部的 `interval` 函数，在延迟时间之后调用传入的函数，然后再次调用 `setTimeout` 来设置下一次执行。
