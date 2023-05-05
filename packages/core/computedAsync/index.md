---
category: Reactivity
alias: asyncComputed
---

# computedAsync

传入异步函数的Computed

Computed for async functions

## Usage

```js
import { ref } from 'vue'
import { computedAsync } from '@vueuse/core'

const name = ref('jack')

const userInfo = computedAsync(
  async () => {
    return await mockLookUp(name.value)
  },
  null, // initial state
)
```

### 评估状态(Evaluation State)

你需要传递一个ref来跟踪异步函数执行进度。

You will need to pass a ref to track if the async function is evaluating.

```js
import { ref } from 'vue'
import { computedAsync } from '@vueuse/core'

const evaluating = ref(false)

const userInfo = computedAsync(
  async () => { /* your logic */ },
  null,
  evaluating,
)
```

### onCancel

当computed数据源在前一个异步函数得到解析之前发生变化时，您可能想要取消前一个。下面是一个示例，展示了如何与 fetch API 结合。

When the computed source changed before the previous async function gets resolved, you may want to cancel the previous one. Here is an example showing how to incorporate with the fetch API.

```js
const packageName = ref('@vueuse/core')

const downloads = computedAsync(async (onCancel) => {
  const abortController = new AbortController()

  onCancel(() => abortController.abort())

  return await fetch(
    `https://api.npmjs.org/downloads/point/last-week/${packageName.value}`,
    { signal: abortController.signal },
  )
    .then(response => response.ok ? response.json() : { downloads: '—' })
    .then(result => result.downloads)
}, 0)
```

### Lazy

默认情况下，`computedAsync` 将在创建时立即开始解析，指定 `lazy: true` 使其在第一次访问时开始解析。

By default, `computedAsync` will start resolving immediately on creation, specify `lazy: true` to make it start resolving on the first accessing.

```js
import { ref } from 'vue'
import { computedAsync } from '@vueuse/core'

const evaluating = ref(false)

const userInfo = computedAsync(
  async () => { /* your logic */ },
  null,
  { lazy: true, evaluating },
)
```

## 警告(Caveats)

- 就像 Vue 的内置 `computed` 函数一样，computedAsync 进行依赖跟踪，并在依赖发生变化时自动更新。但是请注意，为此只考虑在第一个调用堆栈中引用的依赖项。换句话说：**异步访问的依赖项不会触发异步计算值的更新**。

- Just like Vue's built-in `computed` function, `computedAsync` does dependency tracking and is automatically re-evaluated when dependencies change. Note however that only dependency referenced in the first call stack are considered for this. In other words: **Dependencies that are accessed asynchronously will not trigger re-evaluation of the async computed value.**

- 与 Vue 的内置 computed 函数相反，只要依赖项发生变化，就会触发异步计算值的重新计算，而不管其结果当前是否正在被跟踪。

- As opposed to Vue's built-in `computed` function, re-evaluation of the async computed value is triggered whenever dependencies are changing, regardless of whether its result is currently being tracked or not.

- 默认值 `shallow` 将在下一个主要版本中更改为 `true`

- The default value of the `shallow` will be changed to `true` in the next major version.
