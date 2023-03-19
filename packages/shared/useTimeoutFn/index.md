---
category: Animation
---

# useTimeoutFn

带控件的 `setTimeout` 包装器。

Wrapper for `setTimeout` with controls.

## Usage

```js
import { useTimeoutFn } from '@vueuse/core'

const { isPending, start, stop } = useTimeoutFn(() => {
  /* ... */
}, 3000)
```
