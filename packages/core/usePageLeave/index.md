---
category: Sensors
---

# usePageLeave

鼠标是否离开页面的响应式状态。

Reactive state to show whether the mouse leaves the page.

## Usage

```js
import { usePageLeave } from '@vueuse/core'

const isLeft = usePageLeave()
```

## Component Usage
```html
<UsePageLeave v-slot="{ isLeft }">
  Has Left Page: {{ isLeft }}
</UsePageLeave>
```
