# lazyLoadImages

```ts
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");

  const options = {
    threshold: 0,
    rootMargin: "0px 0px 200px 0px", // 设置图片预加载的区域
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = image.dataset.src;
        image.onload = () => {
          image.removeAttribute("data-src");
        };
        observer.unobserve(image);
      }
    });
  }, options);

  images.forEach((image) => {
    imageObserver.observe(image);
  });
}

// 在页面加载完成后调用图片懒加载函数
window.addEventListener("load", lazyLoadImages);
```
