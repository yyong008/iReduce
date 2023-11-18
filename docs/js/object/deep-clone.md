# 深拷贝

## deep-clone

```ts
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj; // 非对象或者 null 直接返回
  }

  let copy;
  if (Array.isArray(obj)) {
    copy = []; // 如果是数组，创建一个新数组
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i]); // 递归拷贝数组的每一项
    }
  } else {
    copy = {}; // 如果是对象，创建一个新对象
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copy[key] = deepCopy(obj[key]); // 递归拷贝对象的每个属性
      }
    }
  }

  return copy;
}
```
