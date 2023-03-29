---
category: Watch
alias: pausableWatch
---

# watchPausable

可暂停的 watch

Pausable watch

## Usage

像往常一样使用 `watch`，但返回额外的 `pause()` 和 `resume()` 函数来控制暂停和恢复。

Use as normal the `watch`, but return extra `pause()` and `resume()` functions to control.

```ts
import { watchPausable } from '@vueuse/core'
import { nextTick, ref } from 'vue'

const source = ref('foo')

const { stop, pause, resume } = watchPausable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // Changed to bar!

pause()

source.value = 'foobar'
await nextTick() // (nothing happend)

resume()

source.value = 'hello'
await nextTick() // Changed to hello!
```
