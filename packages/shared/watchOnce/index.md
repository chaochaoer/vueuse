---
category: Watch
---

# watchOnce

`watch` 只触发一次。

`watch` that only triggers once.

## Usage

回调函数触发一次后，watch 会自动停止。

After the callback function has been triggered once, the watch will be stopped automatically.

```ts
import { watchOnce } from '@vueuse/core'

watchOnce(source, () => {
  // triggers only once
  console.log('source changed!')
})
```
