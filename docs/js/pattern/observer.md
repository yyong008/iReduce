# 实现一个观察者模式

观察者模式是一种设计模式，用于对象之间的一对多依赖关系。当一个对象的状态发生变化时，所有依赖于它的对象都会得到通知并自动更新。下面是一个简单的 JavaScript 实现观察者模式的例子：

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} 收到更新：${data}`);
    // 执行相应的操作，根据需要处理传递的数据
  }
}

// 使用示例
const subject = new Subject();

const observer1 = new Observer("观察者1");
const observer2 = new Observer("观察者2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify("新数据更新啦！");
// 观察者1 收到更新：新数据更新啦！
// 观察者2 收到更新：新数据更新啦！

subject.removeObserver(observer1);

subject.notify("又有新数据更新啦！");
// 观察者2 收到更新：又有新数据更新啦！
```

在这个例子中，`Subject` 类代表被观察的对象，它维护了一个观察者列表，并提供了添加、移除和通知观察者的方法。`Observer` 类代表观察者，它具有一个 `update` 方法用于接收并处理被观察对象的状态变化。当被观察对象的状态发生变化时，它会调用 `notify` 方法通知所有观察者，观察者们会收到更新并执行相应的操作。
