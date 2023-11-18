# 深度相等

实现一个深度比较两个对象是否相等的函数可以通过递归遍历对象的所有属性并逐一比较。以下是一个简单的示例：

```javascript
function isEqual(obj1, obj2) {
  // 检查类型是否相同
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // 如果是基本类型或 null，则直接比较值
  if (obj1 === null || typeof obj1 !== "object") {
    return obj1 === obj2;
  }

  // 获取对象的键数组
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // 键数量不同，直接返回不相等
  if (keys1.length !== keys2.length) {
    return false;
  }

  // 逐一比较对象的属性值
  for (const key of keys1) {
    if (!isEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

// 示例
const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 3 } };

console.log(isEqual(objA, objB)); // 输出为 true
console.log(isEqual(objA, objC)); // 输出为 false
```

这个函数会逐层比较对象的属性，如果对象的结构和属性值都相同，则返回 true，否则返回 false。需要注意的是，这个函数对于循环引用的处理并不包含在内，也可能存在对某些特殊类型（如函数）的比较问题。
