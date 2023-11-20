# map-parseInt

## parseInt 的语法

> 解析字符串并返回指定基数（进制）的整数。

```ts
parseInt(string);
parseInt(string, radix);
```

## map 的语法

```ts
map(callbackFn);
map(callbackFn, thisArg);
```

callbackFn:

- element
- index
- array

## 面试示例

```ts
[1, 2, 3].map(parseInt);
```

等价于：

```ts
[1, 2, 3].map((item, index) => parseInt(item, index));
parseInt("1", 0); // 0 表示 10 进制，转换 10 进制的 1 是，
parseInt("2", 1); // 将 2 解析为 1 进制，1 进制不存在
parseInt("3", 2); // 将 3 解析为 2 进制数据，但是在二进制不存在 3
```

详解：

- 前提条件是第一个参数是字符串。

parseInt 的第一个参数是字符串，第二个参数是字符串的将要转换的进制数。注意这里的解析式字符串到number的解析。不是 3 的 10 进制转换成 2 进制。
