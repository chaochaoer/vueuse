---
category: Elements
---

# useWindowSize

响应式获取窗口尺寸

Reactive window size

## Usage

```js
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
```

## Component Usage

```html
<UseWindowSize v-slot="{ width, height }">
  Width: {{ width }}
  Height: {{ height }}
</UseWindowSize>
```
