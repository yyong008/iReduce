# renderTemplate

```ts
function renderTemplate(template, data) {
  return template.replace(/{{(.*?)}}/g, (match, key) => {
    return data[key.trim()] || "";
  });
}

const templateString = "Hello, my name is {{name}} and I am {{age}} years old.";
const data = {
  name: "Alice",
  age: 30,
};

const rendered = renderTemplate(templateString, data);
console.log(rendered);
```
