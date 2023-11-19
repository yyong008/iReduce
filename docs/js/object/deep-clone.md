# 深拷贝

## 深拷贝考虑

1. **对象类型检测**：需要检测要复制的对象是什么类型（数组、对象、函数等），并根据类型采取相应的复制方法。
2. **循环引用处理**：处理对象内部可能存在的循环引用，避免陷入无限循环或栈溢出。
3. **复制对象属性**：递归复制对象的属性，包括嵌套对象、数组等，并确保每个属性都是独立的副本，而不是引用原始对象的相同属性。
4. **处理特殊类型**：处理特殊类型的对象，如日期对象、正则表达式等，需要特殊的处理方式以确保复制后的对象的正确性和完整性。
5. **性能考虑**：对于大型对象或数据结构，深拷贝可能会带来性能开销。因此，需要考虑实现方式的效率和性能。
6. **兼容性**：确保深拷贝方法在各种环境和浏览器中都能正确运行，避免因兼容性问题导致错误。

## 实现深拷贝方案

- 递归复制
- JSON 序列化/反序列化
- 第三方库（例如： lodash）
- 定制化处理

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

## 结构化克隆 structuredClone

```ts
// 在一个 Web Worker 中使用 structuredClone 复制对象
const obj = { a: 1, b: 'hello', c: [1, 2, 3] };

const clonedObj = structuredClone(obj);
```

### 缺点：

- 原型：无法拷贝对象的原型链。
- 函数：无法拷贝函数。
- 不可克隆：并没有支持所有类型的拷贝，比如 Error。

