---
category: Component
---

# tryOnBeforeUnmount

安全执行 `onBeforeUnmount`。如果在组件生命周期内，则调用 `onBeforeUnmount()`，如果不在，则什么都不做

Safe `onBeforeUnmount`. Call `onBeforeUnmount()` if it's inside a component lifecycle, if not, do nothing

## Usage

```js
import { tryOnBeforeUnmount } from '@vueuse/core'

tryOnBeforeUnmount(() => {

})
```
