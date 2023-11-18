# Object.freeze

```ts
function freeze(obj) {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (typeof value === "object" && !Object.isFrozen(value)) {
      freeze(value); // 递归冻结对象的属性
    }
  });
  return Object.freeze(obj); // 冻结当前对象
}
```
