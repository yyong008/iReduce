# asap

```ts
function asap(callback) {
  Promise.resolve().then(callback);
}

// 示例任务
function doSomething() {
  console.log("Task executed with ASAP!");
}

// 使用 asap 执行任务
asap(doSomething);
```

asap 是一个比 setTimeout 更高效的任务调度工具，它会在当前任务队列的末尾添加一个任务，以确保尽快执行。在 JavaScript 中，可以使用 Promise 和 setTimeout 结合来实现类似的功能。
