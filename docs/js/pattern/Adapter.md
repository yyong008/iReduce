# Adapter

```ts
// 旧的温度计类
class FahrenheitTemperature {
  getTemperature() {
    return 32; // 返回华氏温度
  }
}

// 新的温度计接口
class TemperatureSensor {
  getTemperatureInCelsius() {
    // 返回摄氏度温度
  }
}

class TemperatureAdapter extends TemperatureSensor {
  constructor(fahrenheitTemp) {
    super();
    this.fahrenheitTemp = fahrenheitTemp;
  }

  getTemperatureInCelsius() {
    // 转换摄氏度温度的逻辑
    return ((this.fahrenheitTemp.getTemperature() - 32) * 5) / 9;
  }
}

const fahrenheitTemp = new FahrenheitTemperature();
const adapter = new TemperatureAdapter(fahrenheitTemp);

console.log(adapter.getTemperatureInCelsius()); // 输出：0（对应摄氏度）
```
