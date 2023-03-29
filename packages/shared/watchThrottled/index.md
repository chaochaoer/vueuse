---
category: Watch
alias: throttledWatch
---

# watchThrottled

节流 watch.

Throttled watch.

## Usage

类似于 `watch`，但提供了一个额外的选项 `throttle` 作用于回调函数。

Similar to `watch`, but offering an extra option `throttle` which will be applied to the callback function.

```ts
import { watchThrottled } from '@vueuse/core'

watchThrottled(
  source,
  () => { console.log('changed!') },
  { throttle: 500 },
)
```
它本质上是以下代码的简写：

It's essentially a shorthand for the following code:

```ts
import { throttleFilter, watchWithFilter } from '@vueuse/core'

watchWithFilter(
  source,
  () => { console.log('changed!') },
  {
    eventFilter: throttleFilter(500),
  },
)
```
