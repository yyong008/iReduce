# Command

```ts
// 命令接口
class Command {
  execute() {
    // 执行命令的通用接口
  }
}

// 具体命令：开灯命令
class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

// 接收者：灯
class Light {
  turnOn() {
    console.log("灯已打开");
  }

  turnOff() {
    console.log("灯已关闭");
  }
}

// 调用者：遥控器
class RemoteControl {
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// 创建灯对象和相应的命令
const light = new Light();
const lightOnCommand = new LightOnCommand(light);

// 创建遥控器并设置命令
const remoteControl = new RemoteControl();
remoteControl.setCommand(lightOnCommand);

// 按下按钮执行命令
remoteControl.pressButton(); // 输出：灯已打开
```
