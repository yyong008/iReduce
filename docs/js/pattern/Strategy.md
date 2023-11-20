# Strategy

```ts
// 策略接口
class DiscountStrategy {
  getDiscount(amount) {
    // 策略方法，返回折扣金额
  }
}

// 具体策略：普通用户折扣策略
class RegularDiscount extends DiscountStrategy {
  getDiscount(amount) {
    return amount * 0.1; // 普通用户打 10% 折扣
  }
}

// 具体策略：VIP 用户折扣策略
class VIPDiscount extends DiscountStrategy {
  getDiscount(amount) {
    return amount * 0.2; // VIP 用户打 20% 折扣
  }
}

// 上下文：购物车
class ShoppingCart {
  constructor(discountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  checkout(amount) {
    const discount = this.discountStrategy.getDiscount(amount);
    const total = amount - discount;
    return { total, discount };
  }
}
// 创建不同类型的策略对象
const regularStrategy = new RegularDiscount();
const vipStrategy = new VIPDiscount();

// 创建购物车
const regularCart = new ShoppingCart(regularStrategy);
const vipCart = new ShoppingCart(vipStrategy);

// 客户端调用
const regularPurchase = regularCart.checkout(100); // 普通用户购物 100 元
const vipPurchase = vipCart.checkout(100); // VIP 用户购物 100 元

console.log(regularPurchase); // 输出：{ total: 90, discount: 10 }
console.log(vipPurchase); // 输出：{ total: 80, discount: 20 }
```
