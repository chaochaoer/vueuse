---
category: State
related:
  - useRefHistory
  - useThrottledRefHistory
---

# useDebouncedRefHistory

 `useRefHistory` 的简写，带有防抖过滤器。

Shorthand for `useRefHistory` with debounced filter.

## Usage

当计数器的值开始改变时，该函数会在1000ms后对计数器保存快照。

This function takes a snapshot of your counter after 1000ms when the value of it starts to change.

```ts
import { ref } from 'vue'
import { useDebouncedRefHistory } from '@vueuse/core'

const counter = ref(0)
const { history, undo, redo } = useDebouncedRefHistory(counter, { deep: true, debounce: 1000 })
```
