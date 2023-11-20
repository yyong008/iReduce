# 假值

1.  **false**: 逻辑上的假值。
1.  **0**: 数字 0 被当作假值。
1.  **'' 空字符串**: 空字符串也被视为假值。
1.  **null**: 表示没有值，被当作假值。
1.  **undefined**: 表示未定义，同样被当作假值。
1.  **NaN**: 不是一个有效的数字，被当作假值。

# `+` 到底是拼接还是运算符

- 左侧没有内容时表现为运算符
- 左右两侧都是数据时，表现为运算符号
- 左右两侧有一个是字符串时，表现为字符串

## 简单的 `+` 的理解

- 拼接字符串
- 加法操作符

```ts
console.log(1 + "2"); // 输出什么？'12'
console.log(1 - "2"); // 输出什么？-1
```

### `+` 假值

```ts
console.log(+""); // 0
console.log(+false); // 0
console.log(+0); // 0
console.log(+null); // 0
console.log(+undefined); // NaN
console.log(+NaN); // NaN
```

```ts
console.log(+"0"); // 0
```

### `+` 对象类型

```ts
console.log(+{}); // NaN: {} -> [object String] -> NaN
console.log(+[]); // 0: [] -> [object Object] -> '' -> 0
console.log({} + {}); // [object Object][object Object]
console.log([] + []); // string length = 0
console.log({} + []); // [object Object]
console.log([] + {}); // [object Object]
```

## `==` 类型转换

```ts
console.log(1 == "1"); // 输出什么？为什么？ true, 因为 第二个 '1' 将会发生隐式类型转换为 1
console.log(1 === "1"); // 输出什么？为什么？ 严格相等不发生类型转换
```

## Boolean 包装值类型转换

```ts
console.log(Boolean("")); // 输出什么？包装假值
console.log(Boolean(0)); // 输出什么？ 包装假值
console.log(Boolean([])); // 输出什么？ 包装非假值
```
