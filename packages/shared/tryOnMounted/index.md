---
category: Component
---

# tryOnMounted

安全执行 `onMounted`。如果在组件生命周期内，则调用  `onMounted()`，如果不在，则调用该函数

Safe `onMounted`. Call `onMounted()` if it's inside a component lifecycle, if not, just call the function

## Usage

```js
import { tryOnMounted } from '@vueuse/core'

tryOnMounted(() => {

})
```
