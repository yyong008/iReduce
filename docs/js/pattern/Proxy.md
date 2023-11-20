# Proxy

```ts
// 被代理的对象
class RealImage {
  constructor(fileName) {
    this.fileName = fileName;
    this.loadFromDisk();
  }

  display() {
    console.log(`Displaying ${this.fileName}`);
  }

  loadFromDisk() {
    console.log(`Loading ${this.fileName} from disk`);
  }
}

// 代理对象
class ProxyImage {
  constructor(fileName) {
    this.fileName = fileName;
  }

  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.fileName);
    }
    this.realImage.display();
  }
}

// 使用代理
const proxyImage = new ProxyImage("test.jpg");

// 第一次调用 display，实际上会创建 RealImage 对象并加载图片
proxyImage.display();

// 后续调用 display，直接使用已加载的 RealImage 对象
proxyImage.display();
```
