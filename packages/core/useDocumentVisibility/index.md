---
category: Elements
---

# useDocumentVisibility

响应式跟踪 [`document.visibilityState`]( https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilityState)

Reactively track [`document.visibilityState`]( https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilityState)

## Usage

```js
import { useDocumentVisibility } from '@vueuse/core'

const visibility = useDocumentVisibility()
```

## Component Usage
```html
<UseDocumentVisibility v-slot="{ visibility }">
  Document Visibility: {{ visibility }}
</UseDocumentVisibility>
```
