# 使用准则(Guidelines)

下面是VueUse函数的使用准则。你也可以参考着编写你自己的组合函数。

Here are the guidelines for VueUse functions. You could also take them as a reference for authoring your own composable functions or apps.

您可以在[Anthony Fu](https://github.com/antfu)关于 VueUse 的演讲中找到这些设计决策的一些原因以及编写可组合函数的一些技巧

You can also find some reasons for those design decisions and also some tips for writing composable functions with [Anthony Fu](https://github.com/antfu)'s talk about VueUse:

- [Composable Vue](https://antfu.me/posts/composable-vue-vueday-2021) - at VueDay 2021
- [Composable Vue](https://antfu.me/posts/composable-vue-vueday-2021) - 在 VueDay 2021
- [可组合的 Vue](https://antfu.me/posts/composable-vue-vueconf-china-2021) - at VueConf China 2021 (in Chinese)
- [可组合的 Vue](https://antfu.me/posts/composable-vue-vueconf-china-2021) - at VueConf China 2021 (中文)

## 概要(General)

- 从 `"vue-demi"` 导入所有的vue接口
- Import all Vue APIs from `"vue-demi"`
- 尽可能使用 `ref` 代替 `reactive`
- Use `ref` instead `reactive` whenever possible
- 尽可能用对象作为参数，以便将来扩展更灵活。
- Use options object as arguments whenever possible to be more flexible for future extensions.
- 包装大量数据时，使用 `shallowRef` 而不是 `ref`。
- Use `shallowRef` instead of `ref` when wrapping large amounts of data.
- 在使用多窗口、测试模拟和 SSR 时，使用 `configurableWindow` （等）以更灵活的使用 `window` 等全局变量
- Use `configurableWindow` (etc.) when using global variables like `window` to be flexible when working with multi-windows, testing mocks, and SSR.
- 当涉及到尚未被浏览器广泛实现的Web APIs时，会输出 `isSupported` 标志
- When involved with Web APIs that are not yet implemented by the browser widely, also outputs `isSupported` flag
- 当在内部使用' watch '或' watchEffect '时，也尽可能使' immediate '和' flush '作为可配置项
- When using `watch` or `watchEffect` internally, also make the `immediate` and `flush` options configurable whenever possible
- 使用  `tryOnUnmounted` 优雅地清除副作用
- Use `tryOnUnmounted` to clear the side-effects gracefully
- 避免使用控制台输出
- Avoid using console logs
- 当函数异步时，返回一个 PromiseLike
- When the function is asynchronous, return a PromiseLike

Read also: [Best Practice](./guide/best-practice.md)

## ShallowRef

包装大量数据时，使用 `shallowRef` 代替 `ref`

Use `shallowRef` instead of `ref` when wrapping large amounts of data.

```ts
export function useFetch<T>(url: MaybeRef<string>) {
  // 使用shallowRef防止深层响应式
  const data = shallowRef<T | undefined>()
  const error = shallowRef<Error | undefined>()

  fetch(unref(url))
    .then(r => r.json())
    .then(r => data.value = r)
    .catch(e => error.value = e)

  /* ... */
}
```

## Configurable Globals

在使用多窗口、测试模拟和 SSR 时，使用 `configurableWindow` 或者 `configurableDocument` 以更灵活的使用 `window` 或 `document` 等全局变量

When using global variables like `window` or `document`, support `configurableWindow` or `configurableDocument` in the options interface to make the function flexible when for scenarios like multi-windows, testing mocks, and SSR.

了解更多有关实现的信息：[`_configurable.ts`](https://github.com/vueuse/vueuse/blob/main/packages/core/_configurable.ts)

Learn more about the implementation: [`_configurable.ts`](https://github.com/vueuse/vueuse/blob/main/packages/core/_configurable.ts)

```ts
import type { ConfigurableWindow } from '../_configurable'
import { defaultWindow } from '../_configurable'

export function useActiveElement<T extends HTMLElement>(
  options: ConfigurableWindow = {},
) {
  const {
    // defaultWindow = isClient ? window : undefined
    window = defaultWindow,
  } = options

  let el: T

  // skip when in Node.js environment (SSR)
  if (window) {
    window.addEventListener('blur', () => {
      el = window?.document.activeElement
    }, true)
  }

  /* ... */
}
```

Usage example:

```ts
// in iframe and bind to the parent window
useActiveElement({ window: window.parent })
```

## Watch选项(Watch Options)

函数内使用 `watch` 或者 `watchEffect` 时，尽可能使  `immediate` 和  `flush` 作为可配置项。例如  `watchDebounced`

When using `watch` or `watchEffect` internally, also make the `immediate` and `flush` options configurable whenever possible. For example `watchDebounced`:

```ts
import type { WatchOptions } from 'vue-demi'

// extend the watch options
export interface WatchDebouncedOptions extends WatchOptions {
  debounce?: number
}

export function watchDebounced(
  source: any,
  cb: any,
  options: WatchDebouncedOptions = {},
): WatchStopHandle {
  return watch(
    source,
    () => { /* ... */ },
    options, // pass watch options
  )
}
```

## Controls

我们在使用 `controls` 选项允许用户使用具有单一返回函数时，既可以使用直接赋值的简单用法，又能够在需要时使用更具可控性和灵活性的解构赋值用法。阅读更多：[#362](https://github.com/vueuse/vueuse/pull/362).

We use the `controls` option allowing users to use functions with a single return for simple usages, while being able to have more controls and flexibility when needed. Read more: [#362](https://github.com/vueuse/vueuse/pull/362).

#### 何时提供 `controls` 选项(When to provide a `controls` option)

- 该函数更常用于返回单个 `ref` 
- The function is more commonly used with single `ref` or 
- 例如: `useTimestamp`, `useInterval`,
- Examples: `useTimestamp`, `useInterval`,

```ts
// common usage
const timestamp = useTimestamp()

// more controls for flexibility
const { timestamp, pause, resume } = useTimestamp({ controls: true })
```
参考 `useTimestamp` 的源代码以实现正确的 TypeScript 支持的实现。

Refer to `useTimestamp`'s source code for the implementation of proper TypeScript support.

#### 何时 **不** 提供 `controls` 选项(When **NOT** to provide a `controls` option)

- 该函数更常用于返回多个结果组成的对象
- The function is more commonly used with multiple returns
- 例如: `useRafFn`, `useRefHistory`,
- Examples: `useRafFn`, `useRefHistory`,

```ts
const { pause, resume } = useRafFn(() => {})
```

## isSupported 标志(`isSupported` Flag)

当涉及浏览器尚未广泛实现的 Web API 时，输出 `isSupported` 标志

When involved with Web APIs that are not yet implemented by the browser widely, also outputs `isSupported` flag.

For example `useShare`:

```ts
export function useShare(
  shareOptions: MaybeRef<ShareOptions> = {},
  options: ConfigurableNavigator = {},
) {
  const { navigator = defaultNavigator } = options
  const isSupported = useSupported(() => navigator && 'canShare' in navigator)

  const share = async (overrideOptions) => {
    if (isSupported.value) {
      /* ...implementation */
    }
  }

  return {
    isSupported,
    share,
  }
}
```

## 异步组合式函数(Asynchronous Composables)

当组合式函数是异步时，像 `useFetch` 一样从组合式函数返回一个 PromiseLike 对象是个好主意，这样用户就可以使用 await。这在 Vue 的 `<Suspense>` api 下格外有用

When a composable is asynchronous, like `useFetch`, it is a good idea to return a PromiseLike object from the composable
so the user is able to await the function. This is especially useful in the case of Vue's `<Suspense>` api.

- 用一个 `ref` 确定函数何时应该 resolve，例如 `isFinished`
- Use a `ref` to determine when the function should resolve e.g. `isFinished`
- 将返回的状态存储在变量中，因为它必须返回两次，一次在 return 中，一次在 promise 中。
- Store the return state in a variable as it must be returned twice, once in the return and once in the promise.
- 返回类型应该是返回类型和 PromiseLike 的交集，例如 `UseFetchReturn & PromiseLike<UseFetchReturn>`
- The return type should be an intersection between the return type and a PromiseLike, e.g. `UseFetchReturn & PromiseLike<UseFetchReturn>`

```ts
export function useFetch<T>(url: MaybeRef<string>): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>> {
  const data = shallowRef<T | undefined>()
  const error = shallowRef<Error | undefined>()
  const isFinished = ref(false)

  fetch(unref(url))
    .then(r => r.json())
    .then(r => data.value = r)
    .catch(e => error.value = e)
    .finally(() => isFinished.value = true)

  // Store the return state in a variable
  const state: UseFetchReturn<T> = {
    data,
    error,
    isFinished,
  }

  return {
    ...state,
    // Adding `then` to an object allows it to be awaited.
    then(onFulfilled, onRejected) {
      return new Promise<UseFetchReturn<T>>((resolve, reject) => {
        until(isFinished)
          .toBeTruthy()
          .then(() => resolve(state))
          .then(() => reject(state))
      }).then(onFulfilled, onRejected)
    },
  }
}
```


## 无渲染组件(Renderless Components)

- 使用渲染函数代替 Vue SFC
- Use render functions instead of Vue SFC
- 使用 `reactive` 将 props 包裹起来，以便于将它们作为 props 传递给插槽
- Wrap the props in `reactive` to easily pass them as props to the slot
- 更推荐将相应函数的参数用作 props 的类型，而不是自己重新创建它们
- Prefer to use the functions options as prop types instead of recreating them yourself
- 仅在函数需要绑定 target 的时候将插槽包裹在 HTML 元素中
- Only wrap the slot in an HTML element if the function needs a target to bind to

```ts
import { defineComponent, reactive } from 'vue-demi'
import type { MouseOptions } from '@vueuse/core'
import { useMouse } from '@vueuse/core'

export const UseMouse = defineComponent<MouseOptions>({
  name: 'UseMouse',
  props: ['touch', 'resetOnTouchEnds', 'initialValue'] as unknown as undefined,
  setup(props, { slots }) {
    const data = reactive(useMouse(props))

    return () => {
      if (slots.default)
        return slots.default(data)
    }
  },
})
```

有时一个函数可能有多个参数，在这种情况下，您可能需要创建一个新接口以将所有接口合并为组件props所使用的单个接口。

Sometimes a function may have multiple parameters, in that case, you maybe need to create a new interface to merge all the interfaces
into a single interface for the component props.

```ts
import type { TimeAgoOptions } from '@vueuse/core'
import { useTimeAgo } from '@vueuse/core'

interface UseTimeAgoComponentOptions extends Omit<TimeAgoOptions<true>, 'controls'> {
  time: MaybeRef<Date | number | string>
}

export const UseTimeAgo = defineComponent<UseTimeAgoComponentOptions>({ /* ... */ })
```
