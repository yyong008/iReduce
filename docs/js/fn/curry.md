# curry

## 实现

```ts
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...newArgs) {
        return curried.apply(this, args.concat(newArgs));
      };
    }
  };
}
```

### 示例

```ts
function addThreeNumbers(x, y, z) {
  return x + y + z;
}
const curriedAdd = curry(addThreeNumbers);

console.log(curriedAdd(1, 2, 3)); // 输出: 6
console.log(curriedAdd(1)(2, 3)); // 输出: 6
console.log(curriedAdd(1, 2)(3)); // 输出: 6
console.log(curriedAdd(1)(2)(3)); // 输出: 6
```
