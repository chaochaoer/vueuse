---
category: State
---

# useAsyncState

响应式异步状态。不会阻塞setup 函数，在promise完成后，将自动触发。

Reactive async state. Will not block your setup function and will trigger changes once the promise is ready.

## Usage

```ts
import axios from 'axios'
import { useAsyncState } from '@vueuse/core'

const { state, isReady, isLoading } = useAsyncState(
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(t => t.data),
  { id: null },
)
```
