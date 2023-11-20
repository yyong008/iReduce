# Iterator

```ts
// 迭代器接口
class Iterator {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }

  hasNext() {
    return this.index < this.items.length;
  }

  next() {
    return this.hasNext() ? this.items[this.index++] : null;
  }
}

// 可迭代对象
class IterableCollection {
  constructor(items) {
    this.items = items;
  }

  // 生成迭代器
  createIterator() {
    return new Iterator(this.items);
  }
}

// 创建可迭代对象
const collection = new IterableCollection([1, 2, 3, 4, 5]);

// 生成迭代器
const iterator = collection.createIterator();

// 遍历元素
while (iterator.hasNext()) {
  console.log(iterator.next());
}
```
