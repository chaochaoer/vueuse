---
category: Watch
---

# watchTriggerable

可以手动触发的 watch

Watch that can be triggered manually

## Usage

一个 `watch` 包装器，支持手动触发 `WatchCallback`，它返回一个 `trigger` 让`WatchCallback`立即执行。

A `watch` wrapper that supports manual triggering of `WatchCallback`, which returns an additional `trigger` to execute a `WatchCallback` immediately.

```ts
import { watchTriggerable } from '@vueuse/core'
import { nextTick, ref } from 'vue'

const source = ref(0)

const { trigger, ignoreUpdates } = watchTriggerable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // 打印: Changed to bar!

// 通过 `trigger` 执行 WatchCallback 不需要等待
trigger() // 打印: Changed to bar!
```

### `onCleanup`
When you want to manually call a `watch` that uses the onCleanup parameter; simply taking the `WatchCallback` out and calling it doesn't make it easy to implement the `onCleanup` parameter.

Using `watchTriggerable` will solve this problem.
```ts
import { watchTriggerable } from '@vueuse/core'
import { ref } from 'vue'

const source = ref(0)

const { trigger } = watchTriggerable(
  source,
  async (v, _, onCleanup) => {
    let canceled = false
    onCleanup(() => canceled = true)

    await new Promise(resolve => setTimeout(resolve, 500))
    if (canceled)
      return

    console.log(`The value is "${v}"\n`)
  },
)

source.value = 1 // no log
await trigger() // logs (after 500 ms): The value is "1"
```
