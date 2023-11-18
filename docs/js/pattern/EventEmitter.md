# EventEmitter

```ts
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (cb) => cb !== callback,
      );
    }
  }

  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        callback(data);
      });
    }
  }
}

// 使用示例
const eventCenter = new EventEmitter();

function handleEvent1(data) {
  console.log("事件1被触发了，数据：", data);
}

function handleEvent2(data) {
  console.log("事件2被触发了，数据：", data);
}

eventCenter.on("event1", handleEvent1);
eventCenter.on("event2", handleEvent2);

eventCenter.emit("event1", { message: "Hello Event 1" });
eventCenter.emit("event2", { message: "Hello Event 2" });

eventCenter.off("event1", handleEvent1);

eventCenter.emit("event1", { message: "Hello again Event 1" });
```
