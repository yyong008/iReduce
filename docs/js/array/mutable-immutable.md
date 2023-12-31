# mutable-immutable

在 JavaScript 中，数组方法可以根据其对原始数组是否进行修改来分类为可变（mutable）和不可变（immutable）方法。

### 可变（Mutable）数组方法：

>这些方法直接修改原始数组，并在原地进行操作。

- **push() / pop()：** 在数组末尾添加/删除元素。
- **shift() / unshift()：** 在数组开头添加/删除元素。
- **splice()：** 对数组进行裁剪、插入或替换操作。
- **reverse()：** 颠倒数组元素的顺序。
- **sort()：** 对数组进行排序。
- **fill()：** 用固定值填充数组的所有元素。

### 不可变（Immutable）数组方法：

>这些方法不修改原始数组，而是返回一个新的数组。

- **concat()：** 连接多个数组，返回一个新数组。
- **slice()：** 返回数组的一个浅拷贝部分。
- **map()：** 对数组的每个元素执行给定函数，并返回一个新数组。
- **filter()：** 根据给定函数的条件过滤数组，并返回一个新数组。
- **reduce() / reduceRight()：** 将数组元素归纳为单个值，并返回该值。
- **flatMap()：** 对数组的每个元素执行映射函数，然后展开结果数组。
