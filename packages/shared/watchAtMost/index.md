---
category: Watch
---

# watchAtMost

指定 `watch` 触发的次数。

`watch` with the number of times triggered.

## Usage

类似于 `watch`，带有一个额外的选项 `count`，`count` 可以设置回调函数触发的次数。到达计数后，watch将自动停止。

Similar to `watch` with an extra option `count` which set up the number of times the callback function is triggered. After the count is reached, the watch will be stopped automatically.

```ts
import { watchAtMost } from '@vueuse/core'

watchAtMost(
  source,
  () => { console.log('trigger!') }, // 最多触发3次
  {
    count: 3, // 触发次数
  },
)
```
