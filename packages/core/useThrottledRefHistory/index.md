---
category: State
related: useDebouncedRefHistory, useRefHistory
---

# useThrottledRefHistory

带节流过滤器的 `useRefHistory` 的简写。

Shorthand for `useRefHistory` with throttled filter.

## Usage

该函数在计数器的值被更改后立即获取第一个快照，第二个快照会延迟1000ms。

This function takes the first snapshot right after the counter's value was changed and the second with a delay of 1000ms.

```ts
import { ref } from 'vue'
import { useThrottledRefHistory } from '@vueuse/core'

const counter = ref(0)
const { history, undo, redo } = useThrottledRefHistory(counter, { deep: true, throttle: 1000 })
```
