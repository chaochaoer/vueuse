---
category: Browser
---

# useScreenSafeArea

响应式 `env(safe-area-inset-*)`

Reactive `env(safe-area-inset-*)`

![image](https://webkit.org/wp-content/uploads/safe-areas-1.png)

## Usage

为了使页面完全呈现在屏幕上，必须首先在 `viewport` 的meta中设置额外的属性 `viewport-fit=cover` ，viewport的meta标签可能看起来像这样:

In order to make the page to be fully rendered in the screen, the additional attribute `viewport-fit=cover` within  `viewport` meta tag must be set firstly, the viewport meta tag may look like this:

```html
<meta name='viewport' content='initial-scale=1, viewport-fit=cover'>
```

然后我们可以在组件中使用 `useScreenSafeArea` ，如下所示:

Then we could use `useScreenSafeArea` in the component as shown below:

```ts
import { useScreenSafeArea } from '@vueuse/core'

const {
  top,
  right,
  bottom,
  left,
} = useScreenSafeArea()
```

更多详细信息，您可以参考此文档：[Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)

For further details, you may refer to this documentation: [Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)

## Component Usage

```html
<UseScreenSafeArea top right bottom left>content</UseScreenSafeArea>
```
