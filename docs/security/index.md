# Web 安全

| 安全类型     | 英文缩写            | 说明                                              |
| ------------ | ------------------- | ------------------------------------------------- |
| 跨站脚本攻击 | XSS                 | 通过注入恶意脚本向用户端注入恶意代码。            |
| SQL 注入     | SQLi                | 利用恶意构造的 SQL 查询绕过验证访问或篡改数据库。 |
| 跨站请求伪造 | CSRF                | 利用已认证的用户会话执行未授权操作。              |
| 点击劫持     | Clickjacking        | 通过透明图层欺骗用户，使其执行未预期的点击操作。  |
| 会话劫持     | Session Hijacking   | 窃取会话标识符，冒充合法用户进行未授权操作。      |
| 拒绝服务攻击 | DoS                 | 通过超载或资源耗尽阻止合法用户访问服务或资源。    |
| 信息泄露     | Information Leakage | 因错误配置或实施导致敏感信息泄露给未授权用户。    |

## 内容安全策略

内容安全策略（Content Security Policy，CSP）是一种 Web 安全标准，用于减少和防止恶意脚本的执行，帮助防范跨站脚本攻击（XSS）和数据注入攻击。它通过定义可信任的内容来源以及允许执行的类型和策略，帮助网站管理员限制浏览器加载的资源类型和来源。

CSP 通过 HTTP 标头中的策略指令来实现，这些指令告诉浏览器允许加载哪些资源。例如，可以指定只允许加载来自特定域的脚本、样式表和其他资源。CSP 还可以限制内联脚本和内联样式的执行，以减少 XSS 攻击的风险。

通过实施 CSP，网站管理员可以大大降低被攻击的风险，并提高网站的安全性。然而，正确配置 CSP 需要考虑到网站的具体需求，并进行适当的测试和调整，以确保不会影响到网站的功能和性能。
