---
category: Component
---

# useMounted

使用ref记录挂载状态

Mounted state in ref.

## Usage

```js
import { useMounted } from '@vueuse/core'

const isMounted = useMounted()
```
这本质上是以下简写:

Which is essentially a shorthand of:

```ts
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
```
