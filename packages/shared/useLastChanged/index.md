---
category: State
---

# useLastChanged

记录最后一次更改的时间戳

Records the timestamp of the last change

## Usage

```ts
import { useLastChanged } from '@vueuse/core'

const a = ref(0)

const lastChanged = useLastChanged(a)

a.value = 1

console.log(lastChanged.value)
```
