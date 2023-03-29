---
category: Component
---

# tryOnUnmounted

安全执行 `onUnmounted`。如果在组件生命周期内，则调用 `onUnmounted()`，如果不在，则什么都不做

Safe `onUnmounted`. Call `onUnmounted()` if it's inside a component lifecycle, if not, do nothing

## Usage

```js
import { tryOnUnmounted } from '@vueuse/core'

tryOnUnmounted(() => {

})
```
