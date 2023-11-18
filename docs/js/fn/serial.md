# serial

```ts
// 串行执行函数
function serial(tasks, callback) {
  if (tasks.length === 0) {
    callback([]);
    return;
  }

  let results = [];
  let index = 0;

  function next() {
    if (index < tasks.length) {
      tasks[index](function (result) {
        results.push(result);
        index++;
        next();
      });
    } else {
      callback(results);
    }
  }

  next();
}
```
