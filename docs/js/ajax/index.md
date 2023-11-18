# ajax

## 实现 ajax

```ts
function ajax(url, method, data, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        successCallback(xhr.responseText);
      } else {
        errorCallback(xhr.status);
      }
    }
  };

  xhr.open(method, url, true);
  xhr.setRequestHeader("Content-Type", "application/json"); // 设置请求头，根据需要调整

  if (data) {
    xhr.send(JSON.stringify(data)); // 发送请求
  } else {
    xhr.send();
  }
}
```

## 实现异步请求并限制数量

```ts
// 模拟异步函数，这里用 setTimeout 模拟异步操作
function asyncFunction(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task ${item} completed`);
      resolve(item);
    }, 1000);
  });
}

async function limitConcurrency(tasks, limit) {
  const executing = [];
  const result = [];

  for (const task of tasks) {
    const promise = asyncFunction(task);
    result.push(promise);

    const executingPromise = promise.then(() =>
      executing.splice(executing.indexOf(executingPromise), 1),
    );
    executing.push(executingPromise);

    if (executing.length >= limit) {
      await Promise.race(executing);
    }
  }

  return Promise.all(result);
}

// 示例：并发数量限制为 2
const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
limitConcurrency(tasks, 2).then(() => {
  console.log("All tasks completed");
});
```
