# Intersection

```ts
function intersectArrays(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  return Array.from(new Set([...set1].filter((item) => set2.has(item))));
}

// 示例数组
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];

// 获取两个数组的交集
const intersectedArray = intersectArrays(array1, array2);
console.log(intersectedArray); // 输出数组的交集 [3]
```
