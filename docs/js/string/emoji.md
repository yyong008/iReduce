# emoji

## 随机生成 emoji

```ts
export function getRandomEmoji() {
  // 随机选择一个起始点（Unicode 范围中的值）
  const start = 0x1F600; // 起始点
  const end = 0x1F64F; // 结束点

  // 生成随机的 Unicode 编码
  const randomCodePoint = Math.floor(Math.random() * (end - start + 1)) + start;

  // 将 Unicode 编码转换为对应的 emoji 并返回
  return String.fromCodePoint(randomCodePoint);
}
```
