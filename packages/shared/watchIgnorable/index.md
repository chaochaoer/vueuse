---
category: Watch
alias: ignorableWatch
---

# watchIgnorable

可忽略的 watch

Ignorable watch

## Usage

扩展 `watch` ，返回额外的 `ignoreUpdates(updater)` 和 `ignorePrevAsyncUpdates()` 来忽略对源的特定更新。

Extended `watch` that returns extra `ignoreUpdates(updater)` and `ignorePrevAsyncUpdates()` to ignore particular updates to the source.

```ts
import { watchIgnorable } from '@vueuse/core'
import { nextTick, ref } from 'vue'

const source = ref('foo')

const { stop, ignoreUpdates } = watchIgnorable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // logs: Changed to bar!

ignoreUpdates(() => {
  source.value = 'foobar'
})
await nextTick() // (nothing happened)

source.value = 'hello'
await nextTick() // logs: Changed to hello!

ignoreUpdates(() => {
  source.value = 'ignored'
})
source.value = 'logged'

await nextTick() // logs: Changed to logged!
```

## 更新时机(Flush timing)

`watchIgnorable` 接受和 `watch` 相同的参数，并使用相同的默认值。因此，默认情况下，可以和 `flush: 'pre'` 组合使用

`watchIgnorable` accepts the same options as `watch` and uses the same defaults.
So, by default the composable works using `flush: 'pre'`.

## `ignorePrevAsyncUpdates`

<!-- 此功能仅适用于异步刷新 `'pre'` 和 `'post'`。如果使用 `flush: 'sync'` ，`ignorePrevAsyncUpdates()` 是一个no-op，因为watch将在每次更新源后立即触发。它仍然为同步刷新提供，因此代码可以更通用。 -->

This feature is only for async flush `'pre'` and `'post'`. If `flush: 'sync'` is used, `ignorePrevAsyncUpdates()` is a no-op as the watch will trigger immediately after each update to the source. It is still provided for sync flush so the code can be more generic.

```ts
import { watchIgnorable } from '@vueuse/core'
import { nextTick, ref } from 'vue'

const source = ref('foo')

const { ignorePrevAsyncUpdates } = watchIgnorable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // logs: Changed to bar!

source.value = 'good'
source.value = 'by'
ignorePrevAsyncUpdates()

await nextTick() // (nothing happened)

source.value = 'prev'
ignorePrevAsyncUpdates()
source.value = 'after'

await nextTick() // logs: Changed to after!
```

## Recommended Readings

- [Ignorable Watch](https://patak.dev/vue/ignorable-watch.html) - by [@matias-capeletto](https://github.com/matias-capeletto)
