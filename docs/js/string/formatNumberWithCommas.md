# formatNumberWithCommas

```ts
function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 示例数字
const number = 1234567;

// 将数字转换为千分位分隔的形式
const formattedNumber = formatNumberWithCommas(number);
console.log(formattedNumber); // 输出: 1,234,567
```
