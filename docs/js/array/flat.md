# flat

```ts
function flat(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(flat(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}
```
