# toArray

```ts
function toArray(arrayLike) {
  return Array.from(arrayLike);
}

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
}
```
