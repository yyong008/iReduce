# jsonp

```ts
function jsonp(url, callbackName, callback) {
  const script = document.createElement("script");
  const callbackFunctionName = `jsonp_${Math.round(100000 * Math.random())}`;

  window[callbackFunctionName] = function (data) {
    callback(data);
    document.body.removeChild(script);
    delete window[callbackFunctionName];
  };

  const fullURL = `${url}?callback=${callbackFunctionName}`;

  script.src = fullURL;
  document.body.appendChild(script);
}

// 使用示例
jsonp("https://api.example.com/data", "callback", function (data) {
  console.log("获取的数据:", data);
  // 处理返回的数据
});
```
