# 合并

```ts
function unionArrays(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}

// 示例数组
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];

// 合并两个数组
const unionArray = unionArrays(array1, array2);
console.log(unionArray); // 输出合并后的数组 [1, 2, 3, 4, 5]
```
