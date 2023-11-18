# localstorage

```ts
// 存储数据到 localStorage
function setItem(key, value, expirationTimeInMinutes) {
  const expirationMS = expirationTimeInMinutes * 60 * 1000; // 将分钟转换为毫秒
  const expiration = expirationMS === 0 ? 0 : Date.now() + expirationMS;
  const data = {
    value: value,
    expiration: expiration,
  };
  localStorage.setItem(key, JSON.stringify(data));
}

// 从 localStorage 获取数据
function getItem(key) {
  const data = JSON.parse(localStorage.getItem(key));
  if (data === null) {
    return null;
  }
  if (data.expiration === 0 || data.expiration > Date.now()) {
    return data.value;
  } else {
    localStorage.removeItem(key); // 数据已过期，移除缓存
    return null;
  }
}

// 示例：存储数据并设置过期时间为 5 分钟
setItem("myKey", "myValue", 5);

// 获取数据
const retrievedValue = getItem("myKey");
console.log(retrievedValue); // 输出获取到的值或 null（如果数据过期或不存在）
```
