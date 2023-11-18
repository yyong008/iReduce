# 去重

1. **使用 Set 数据结构**

   ```javascript
   const array = [1, 2, 2, 3, 4, 4, 5];
   const uniqueArray = [...new Set(array)];
   ```

2. **使用 filter 方法**

   ```javascript
   const array = [1, 2, 2, 3, 4, 4, 5];
   const uniqueArray = array.filter(
     (value, index, self) => self.indexOf(value) === index,
   );
   ```

3. **使用 reduce 方法**

   ```javascript
   const array = [1, 2, 2, 3, 4, 4, 5];
   const uniqueArray = array.reduce(
     (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
     [],
   );
   ```

4. **使用对象键值对的方式**

   ```javascript
   const array = [1, 2, 2, 3, 4, 4, 5];
   const uniqueArray = Object.keys(
     array.reduce((obj, item) => {
       obj[item] = true;
       return obj;
     }, {}),
   );
   ```

5. **使用 ES6+ 的 includes 方法**

   ```javascript
   const array = [1, 2, 2, 3, 4, 4, 5];
   const uniqueArray = [];
   array.forEach((item) => {
     if (!uniqueArray.includes(item)) {
       uniqueArray.push(item);
     }
   });
   ```
