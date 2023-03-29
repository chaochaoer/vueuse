---
category: Watch
alias: debouncedWatch
---

# watchDebounced

防抖 watch

Debounced watch

## Usage

类似于 `watch`，但提供了额外的选项 `debounce` 和 `maxWait`，这些选项将作用于回调函数。

Similar to `watch`, but offering extra options `debounce` and `maxWait` which will be applied to the callback function.

```ts
import { watchDebounced } from '@vueuse/core'

watchDebounced(
  source,
  () => { console.log('changed!') },
  { debounce: 500, maxWait: 1000 },
)
```

本质上是以下代码的简写：

It's essentially a shorthand for the following code:

```ts
import { debounceFilter, watchWithFilter } from '@vueuse/core'

watchWithFilter(
  source,
  () => { console.log('changed!') },
  {
    eventFilter: debounceFilter(500, { maxWait: 1000 }),
  },
)
```
