---
category: State
related: useRefHistory
---

# useManualRefHistory

调用 `commit()` 时，手动跟踪ref的更改历史，提供撤消和重做功能

Manually track the change history of a ref when the using calls `commit()`, also provides undo and redo functionality

## Usage

```ts {5}
import { ref } from 'vue'
import { useManualRefHistory } from '@vueuse/core'

const counter = ref(0)
const { history, commit, undo, redo } = useManualRefHistory(counter)

counter.value += 1
commit()

console.log(history.value)
/* [
  { snapshot: 1, timestamp: 1601912898062 },
  { snapshot: 0, timestamp: 1601912898061 }
] */
```

您可以使用 `undo` 将ref值重置为最后一个历史记录。

You can use `undo` to reset the ref value to the last history point.

```ts
console.log(counter.value) // 1
undo()
console.log(counter.value) // 0
```
#### 可变历史对象(History of mutable objects)

如果你要改变源，你需要传递一个自定义克隆函数或使用 `clone` `true` 作为参数，这是一个简版克隆函数 `x => JSON.parse(JSON.stringify(x))` ，将在 `dump` and `parse` 中使用。

If you are going to mutate the source, you need to pass a custom clone function or use `clone` `true` as a param, that is a shortcut for a minimal clone function `x => JSON.parse(JSON.stringify(x))` that will be used in both `dump` and `parse`.

```ts {5}
import { ref } from 'vue'
import { useManualRefHistory } from '@vueuse/core'

const counter = ref({ foo: 1, bar: 2 })
const { history, commit, undo, redo } = useManualRefHistory(counter, { clone: true })

counter.value.foo += 1
commit()
```

#### 自定义克隆函数(Custom Clone Function)

使用一个功能全面或者自定义函数，可以设置 `dump` 

To use a full featured or custom clone function, you can set up via the `dump` options.

例如使用 [structuredClone]( https://developer.mozilla.org/zh-CN/docs/Web/API/structuredClone):

For example, using [structuredClone]( https://developer.mozilla.org/zh-CN/docs/Web/API/structuredClone):

```ts
import { useManualRefHistory } from '@vueuse/core'

const refHistory = useManualRefHistory(target, { clone: structuredClone })
```
或者使用 [lodash's `cloneDeep`](https://lodash.com/docs/4.17.15#cloneDeep):

Or by using [lodash's `cloneDeep`](https://lodash.com/docs/4.17.15#cloneDeep):

```ts
import { cloneDeep } from 'lodash-es'
import { useManualRefHistory } from '@vueuse/core'

const refHistory = useManualRefHistory(target, { clone: cloneDeep })
```
或者更轻量的 [`klona`](https://github.com/lukeed/klona):

Or a more lightweight [`klona`](https://github.com/lukeed/klona):

```ts
import { klona } from 'klona'
import { useManualRefHistory } from '@vueuse/core'

const refHistory = useManualRefHistory(target, { clone: klona })
```

#### 自定义Dump and Parse(Custom Dump and Parse Function)

您可以传递自定义函数来控制序列化和解析，而不是使用 `clone` 参数。如果您不需要历史值作为对象，你可以在撤消时节省额外的克隆。例如，如果您希望将已经字符串化的快照保存到本地存储，那么它也很有用。

Instead of using the `clone` param, you can pass custom functions to control the serialization and parsing. In case you do not need history values to be objects, this can save an extra clone when undoing. It is also useful in case you want to have the snapshots already stringified to be saved to local storage for example.

```ts
import { useManualRefHistory } from '@vueuse/core'

const refHistory = useManualRefHistory(target, {
  dump: JSON.stringify,
  parse: JSON.parse,
})
```

### History Capacity

默认情况下保留所有历史记录(无限)，直到你明确地清除它们，您可以通过 `capacity` 选项设置历史记录的最大数量。

We will keep all the history by default (unlimited) until you explicitly clear them up, you can set the maximal amount of history to be kept by `capacity` options.

```ts
const refHistory = useManualRefHistory(target, {
  // 15条
  // limit to 15 history records
  capacity: 15,
})
// 显示清除所有记录
// explicitly clear all the history
refHistory.clear()
```
