---
category: Animation
---

# useRafFn

在每个 `requestAnimationFrame` 上调用函数。可控制暂停和恢复。

Call function on every `requestAnimationFrame`. With controls of pausing and resuming.

## Usage

```js
import { ref } from 'vue'
import { useRafFn } from '@vueuse/core'

const count = ref(0)

const { pause, resume } = useRafFn(() => {
  count.value++
  console.log(count.value)
})
```
