# 数组分片

```ts
function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

// 示例数组
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 将数组分成大小为 3 的片段
const chunkedArray = chunkArray(myArray, 3);

console.log(chunkedArray); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```
