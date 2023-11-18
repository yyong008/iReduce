# 函数执行顺序

## 示例 1

```ts
console.log("start");

setTimeout(() => {
  console.log("setTimeout1");
}, 0);

(async function async() {
  console.log("async 1");

  await async2();

  console.log("async2");
})().then(console.log("async.then"));

async function async2() {
  console.log("asyncFunction");

  setTimeout(() => {
    console.log("setTimeout2");
  }, 0);

  new Promise((res) => {
    console.log("promise1");

    res("promise2");
  }).then(console.log);
}

setTimeout(() => {
  console.log("setTimeout3");
}, 0);

console.log("end");

// start
// async 1
// asyncFunction
// promise1
// async.then
// end
// promise2
// async2
// setTimeout1
// setTimeout2
// setTimeout3
```
