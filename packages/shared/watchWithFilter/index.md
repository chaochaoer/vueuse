---
category: Watch
---

# watchWithFilter

带事件过滤器的 `watch` 控件

`watch` with additional EventFilter control.

## Usage

类似于 `watch`，但提供了额外的 `eventFilter` 选项，作用于回调函数。

Similar to `watch`, but offering an extra option `eventFilter` which will be applied to the callback function.

```ts
import { debounceFilter, watchWithFilter } from '@vueuse/core'

watchWithFilter(
  source,
  () => { console.log('changed!') }, // callback will be called in 500ms debounced manner
  {
    eventFilter: debounceFilter(500), // throttledFilter, pausabledFilter or custom filters
  },
)
```
