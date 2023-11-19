# form

## 表单默认行为

1. **提交行为**：当用户点击表单内的提交按钮时（通常是 `<input type="submit">` 或 `<button type="submit">`），表单会提交。这会触发提交事件，并向表单的 `action` 属性指定的 URL 发送请求。
2. **GET/POST 方法**：表单可以使用 GET 或 POST 方法提交数据。GET 方法将表单数据附加到 URL 上，POST 方法将数据包含在请求体中。这是通过表单的 `method` 属性定义的。
3. **默认刷新页面**：表单提交后，如果没有使用 JavaScript 阻止默认行为，页面会根据服务器返回的响应刷新或跳转到新页面。这取决于服务器响应的内容。
4. **清除表单数据**：默认情况下，在表单提交后，表单中的输入字段会被清空。
5. 使用 `event.preventDefault()` 可以阻止表单提交或者在提交前执行其他操作。

## 表单的默认 Content-type

在 HTML 表单提交时，默认的 `Content-Type` 取决于表单的 `method` 属性以及表单中包含的内容。

1. **GET 方法**：当使用 GET 方法提交表单时，默认的 `Content-Type` 是 `application/x-www-form-urlencoded`。数据会附加在 URL 的查询字符串中，格式为键值对形式，用 `&` 符号连接，例如：`?key1=value1&key2=value2`
2. **POST 方法**：对于 POST 方法，默认的 `Content-Type` 也是 `application/x-www-form-urlencoded`。数据以相同的格式发送，但是不附加在 URL 上，而是作为请求体的一部分发送到服务器。

可以使用 `enctype` 属性来改变提交数据的方式和 `Content-Type`。例如：

- 如果使用 `enctype="multipart/form-data"`，则 `Content-Type` 会变成 `multipart/form-data`，常用于上传文件。
- 如果使用 `enctype="text/plain"`，则 `Content-Type` 变成 `text/plain`，以纯文本形式发送数据。

需要注意的是，这些是 HTML 表单默认行为下的 `Content-Type`，实际上在实现中，开发者也可以使用 JavaScript 或其他方式来动态地更改这些默认设置。
