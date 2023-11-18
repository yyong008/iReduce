# parallel

```ts
// 并行执行函数
function parallel(tasks, callback) {
  if (tasks.length === 0) {
    callback([]);
    return;
  }

  let results = [];
  let completedTasks = 0;

  function checkCompletion() {
    completedTasks++;
    if (completedTasks === tasks.length) {
      callback(results);
    }
  }

  for (let i = 0; i < tasks.length; i++) {
    tasks[i](function (result) {
      results[i] = result;
      checkCompletion();
    });
  }
}
```
