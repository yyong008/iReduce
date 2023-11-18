# isPerfectSquare

## 完全平方根

```ts
// 方案一
function isPerfectSquare(num) {
  const sqrtNum = Math.sqrt(num);
  return sqrtNum === Math.floor(sqrtNum);
}

// 方案二
function isPerfectSquare(num) {
  return num ** 0.5 % 1 == 0;
}
```
