---
category: Sensors
---

# useMousePressed

响应式鼠标按下状态。由目标元素的 `mousedown` `touchstart` 事件触发，并由window上的 `mouseup` `mouseleave` `touchend` `touchcancel` 事件释放。

Reactive mouse pressing state. Triggered by `mousedown` `touchstart` on target element and released by `mouseup` `mouseleave` `touchend` `touchcancel` on window.

## Basic Usage

```js
import { useMousePressed } from '@vueuse/core'

const { pressed } = useMousePressed()
```

Touching is enabled by default. To make it only detects mouse changes, set `touch` to `false`

```js
const { pressed } = useMousePressed({ touch: false })
```

To only capture `mousedown` and `touchstart` on specific element, you can specify `target` by passing a ref of the element. 


```html {16-20}
<template>
  <div ref="el">
    Only clicking on this element will trigger the update.
  </div>
</template>

<script>
import { ref } from 'vue'
import { useMousePressed } from '@vueuse/core'

export default {
  setup() {
    const el = ref(null)

    const { pressed } = useMousePressed({ target: el })

    return {
      el,
      pressed,
    }
  }
}
</script>
```

## Component Usage

```html
<UseMousePressed v-slot="{ pressed }">
  Is Pressed: {{ pressed }}
</UseMousePressed>
```
