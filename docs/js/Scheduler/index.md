# Scheduler

<!--
```tsx
class Scheduler {
  constructor() {
    this.queue = [];
    this.isRunning = false;
  }

  addTask(task, delay) {
    this.queue.push({ task, delay });

    if (!this.isRunning) {
      this.execute();
    }
  }

  execute() {
    if (this.queue.length > 0) {
      const { task, delay } = this.queue.shift();
      this.isRunning = true;

      setTimeout(() => {
        task();
        this.isRunning = false;
        this.execute();
      }, delay);
    }
  }
}

// 创建调度器实例
const scheduler = new Scheduler();

// 示例任务
function task1() {
  console.log('Task 1 executed!');
}

function task2() {
  console.log('Task 2 executed!');
}

// 添加任务到调度器
scheduler.addTask(task1, 2000); // 2秒后执行 task1
scheduler.addTask(task2, 3000); // 3秒后执行 task2
``` -->
