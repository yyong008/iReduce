# snakeToCamel

```ts
function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, function (match, char) {
    return char.toUpperCase();
  });
}
```
