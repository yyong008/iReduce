# getURLParams

```ts
function getURLParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const params = {};

  for (const [key, value] of urlParams.entries()) {
    params[key] = value;
  }

  return params;
}

// 使用封装的函数获取URL参数
const queryParams = getURLParams();

// 输出获取的参数
console.log(queryParams);
```
