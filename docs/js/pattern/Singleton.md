# Singleton

```ts
const Singleton = {
  instance: null,
  getInstance: function () {
    if (!this.instance) {
      this.instance = this.createInstance();
    }
    return this.instance;
  },
  createInstance: function () {
    // 在这里创建单例的实例
    return {
      /* 实例化的对象 */
    };
  },
};

// 使用方式
const myInstance = Singleton.getInstance();
```

## 闭包实现

```ts
const Singleton = (function () {
  let instance;

  function createInstance() {
    // 在这里创建单例的实例
    return {
      /* 实例化的对象 */
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// 使用方式
const myInstance = Singleton.getInstance();
```
