---
category: Elements
---

# useWindowFocus

使用 `window.onfocus` 和 `window.onblur` 事件响应式跟踪窗口焦点。

Reactively track window focus with `window.onfocus` and `window.onblur` events.

## Usage

```js
import { useWindowFocus } from '@vueuse/core'

const focused = useWindowFocus()
```

## Component Usage
```html
<UseWindowFocus v-slot="{ focused }">
  Document Focus: {{ focused }}
</UseWindowFocus>
```
