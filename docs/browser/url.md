# 浏览器 url

## 从输入一个url到显示页面发生了哪些事情？

- DNS解析：浏览器会先通过DNS服务器获取URL对应的IP地址。
- TCP连接：浏览器会向目标服务器发起TCP连接请求。
- 发送HTTP请求TCP连接建立后，浏览器会向服务器发送HTTP请求。
- 服务器响应：服务器接收到HTTP请求后，会根据请求返回相应的内容和状态码。
- 浏览器解析渲染：浏览器接收到服务器返回的响应后，会先进行解析，将HTML转换为DOM树，将CSS转换为CSSOM树，并且执行JS代码。然后，浏览器会将DOM树和CSSOM树结合起来，生成渲染树，并根据渲染树进行布局和绘制，最终呈现出完整的页面。
- 连接结束：浏览器断开与服务器的连接，页面显示完成
