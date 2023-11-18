# tree list

树形结构到列表（数组）的转换以及列表（数组）到树形结构的转换是树形数据处理中常见的操作。下面分别给出这两种转换的示例。

### 树形结构转换为列表：

```javascript
function treeToList(tree) {
  const result = [];

  function traverse(node) {
    result.push(node.value);
    if (node.children) {
      node.children.forEach((child) => {
        traverse(child);
      });
    }
  }

  traverse(tree);
  return result;
}

// 示例树形结构
const tree = {
  value: "A",
  children: [
    {
      value: "B",
      children: [{ value: "D" }, { value: "E" }],
    },
    {
      value: "C",
      children: [{ value: "F" }],
    },
  ],
};

// 将树形结构转换为列表（数组）
const list = treeToList(tree);
console.log(list); // ['A', 'B', 'D', 'E', 'C', 'F']
```

### 列表（数组）转换为树形结构：

```javascript
function listToTree(list) {
  const tree = { value: list[0], children: [] };
  let currentNode = tree;

  for (let i = 1; i < list.length; i++) {
    if (!currentNode.children) {
      currentNode.children = [];
    }

    currentNode.children.push({ value: list[i], children: [] });
    currentNode = currentNode.children[currentNode.children.length - 1];
  }

  return tree;
}

// 示例列表（数组）
const list = ["A", "B", "D", "E", "C", "F"];

// 将列表（数组）转换为树形结构
const tree = listToTree(list);
console.log(tree);
```
