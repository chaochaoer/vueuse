---
category: Sensors
---

# useMouse

响应式获取鼠标位置

Reactive mouse position

## Basic Usage

```js
import { useMouse } from '@vueuse/core'

const { x, y, sourceType } = useMouse()
```

默认情况下启用 Touch。要仅检测鼠标变化，请设置 `touch` 为 `false`。 `dragover` 事件用于在拖动时跟踪鼠标位置。

Touch is enabled by default. To only detect mouse changes, set `touch` to `false`.
The `dragover` event is used to track mouse position while dragging.

```js
const { x, y } = useMouse({ touch: false })
```

## Component Usage

```html
<UseMouse v-slot="{ x, y }">
  x: {{ x }}
  y: {{ y }}
</UseMouse>
```
