---
category: Browser
---

# useTextDirection

响应式操作元素文本 [方向]( https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/dir).

Reactive [dir]( https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/dir) of the element's text.

## Usage

```ts
import { useTextDirection } from '@vueuse/core'

const dir = useTextDirection() // Ref<'ltr' | 'rtl' | 'auto'>
```

默认情况下，当 `rlt` 作用于 `html` 标签时，它返回 `rlt` 方向，例如:

By default, it returns `rlt` direction when dir `rtl` is applied to the `html` tag, for example:

```html
<!--ltr-->
<html> ... </html>

<!--rtl-->
<html dir="rtl"> ... </html>
```

## Options

```ts
import { useTextDirection } from '@vueuse/core'

const mode = useTextDirection({
  selector: 'body'
}) // Ref<'ltr' | 'rtl' | 'auto'>
```
