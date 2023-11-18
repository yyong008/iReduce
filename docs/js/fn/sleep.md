# sleep

在 JavaScript 中实现类似于 `sleep` 的功能，即暂停执行一段时间，可以使用不同的方法：

### 1. 使用 Promise 和 setTimeout

```javascript
function sleepWithPromise(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 使用示例
console.log("开始");
sleepWithPromise(2000).then(() => {
  console.log("经过 2 秒");
});
```

### 2. 使用 async/await 和 setTimeout

```javascript
function sleepWithAsyncAwait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 使用示例
async function sleepExample() {
  console.log("开始");
  await sleepWithAsyncAwait(2000);
  console.log("经过 2 秒");
}

sleepExample();
```

### 3. 使用 Generator 和 setTimeout

```javascript
function* sleepGenerator(ms) {
  yield new Promise((resolve) => setTimeout(resolve, ms));
}

// 使用示例
console.log("开始");
const sleepIterator = sleepGenerator(2000);
sleepIterator.next().value.then(() => {
  console.log("经过 2 秒");
});
```

### 4. 使用回调函数和 setTimeout

```javascript
function sleepWithCallback(ms, callback) {
  setTimeout(callback, ms);
}

// 使用示例
console.log("开始");
sleepWithCallback(2000, () => {
  console.log("经过 2 秒");
});
```

### 5. 使用 Worker

```javascript
function sleepWithWorker(ms) {
  const worker = new Worker(
    URL.createObjectURL(
      new Blob([
        `
    self.addEventListener('message', function(e) {
      setTimeout(() => {
        self.postMessage('Done');
      }, e.data);
    });
  `,
      ]),
    ),
  );

  return new Promise((resolve) => {
    worker.addEventListener("message", () => {
      resolve();
      worker.terminate();
    });
    worker.postMessage(ms);
  });
}

// 使用示例
console.log("开始");
sleepWithWorker(2000).then(() => {
  console.log("经过 2 秒");
});
```

这些方法在实现上有所不同，但都能在 JavaScript 中实现类似 `sleep` 的功能，即在指定时间后执行后续代码。选择哪种方法取决于代码的上下文和所处环境。
