---
category: Animation
---

# useIntervalFn

带控件的 `setInterval` 包装器

Wrapper for `setInterval` with controls

## Usage

```js
import { useIntervalFn } from '@vueuse/core'

const { pause, resume, isActive } = useIntervalFn(() => {
  /* your function */
}, 1000)
```
