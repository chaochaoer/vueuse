---
category: Component
---

# tryOnBeforeMount

安全执行 `onBeforeMount`。如果在组件生命周期内就调用 `onBeforeMount()`，如果不在就调用函数

Safe `onBeforeMount`. Call `onBeforeMount()` if it's inside a component lifecycle, if not, just call the function

## Usage

```js
import { tryOnBeforeMount } from '@vueuse/core'

tryOnBeforeMount(() => {

})
```
