---
category: Sensors
---

# useElementByPoint

以坐标点响应式操作元素。

Reactive element by point.

## Usage

```ts
import { useElementByPoint, useMouse } from '@vueuse/core'

const { x, y } = useMouse({ type: 'client' })
const { element } = useElementByPoint({ x, y })
```
