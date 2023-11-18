# Merge

```ts
function mergeArrays(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  return Array.from(new Set([...set1, ...set2]));
}

// 示例数组
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];

// 获取两个数组的并集
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray); // 输出数组的并集 [1, 2, 3, 4, 5]
```
