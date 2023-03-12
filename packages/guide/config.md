# 配置（Configurations）

本章将介绍VueUse中大多数函数的通用配置。

These show the general configurations for most of the functions in VueUse.

### 事件过滤器（Event Filters）

从v4.0开始，我们提供了事件过滤器，以灵活地控制何时触发事件。例如，你可以使用 `throttleFilter` 和 `debounceFilter` 来控制事件触发频率:

From v4.0, we provide the Event Filters system to give the flexibility to control when events will get triggered. For example, you can use `throttleFilter` and `debounceFilter` to control the event trigger rate:

```ts
import { debounceFilter, throttleFilter, useLocalStorage, useMouse } from '@vueuse/core'

// 节流1s
// changes will write to localStorage with a throttled 1s
const storage = useLocalStorage('my-key', { foo: 'bar' }, { eventFilter: throttleFilter(1000) })

// 防抖100ms
// mouse position will be updated after mouse idle for 100ms
const { x, y } = useMouse({ eventFilter: debounceFilter(100) })
```

此外，可以使用 `pausableFilter` 来暂时的暂停一些事件。

Moreover, you can utilize `pausableFilter` to temporarily pause some events.

```ts
import { pausableFilter, useDeviceMotion } from '@vueuse/core'

const motionControl = pausableFilter()

const motion = useDeviceMotion({ eventFilter: motionControl.eventFilter })

motionControl.pause()

// 暂停
// motion updates paused

motionControl.resume()

// 继续
// motion updates resumed
```

### 触发时机(Reactive Timing)

一般情况下，VueUse的函数会遵守响应式系统默认的[flush timing](https://vuejs.org/guide/essentials/watchers.html#callback-flush-timing) 。

VueUse's functions follow Vue's reactivity system defaults for [flush timing](https://vuejs.org/guide/essentials/watchers.html#callback-flush-timing) where possible.

 <!-- TODO -->
对于类 `watch` 类的组合项(例如: `pausableWatch`, `whenever`, `useStorage`, `useRefHistory` )默认是' {flush: 'pre'} '。这意味着它们将缓存副作用函数，并异步刷新它们。这样一来，在同一个“tick”中产生多个状态变化时，不会出现多个不必要的重复调用。

For `watch`-like composables (e.g. `pausableWatch`, `whenever`, `useStorage`, `useRefHistory`) the default is `{ flush: 'pre' }`. Which means they will buffer invalidated effects and flush them asynchronously. This avoids unnecessary duplicate invocation when there are multiple state mutations happening in the same "tick".

与`watch`相同的配置方式，VueUse允许你通过传递 `flush` 选项来控制刷新时机

In the same way as with `watch`, VueUse allows you to configure the timing by passing the `flush` option:

```ts
const { pause, resume } = pausableWatch(
  () => {
    // 安全访问更新后的DOM
    // Safely access updated DOM
  },
  { flush: 'post' },
)
```
**flush option (default: `'pre'`)**

- `'pre'`: 缓存副作用函数，并在渲染前刷新他们。
- `'pre'`: buffers invalidated effects in the same 'tick' and flushes them before rendering
- `'post'`: async类似于'pre'，但在组件更新后触发，以便能访问更新后的DOM
- `'post'`: async like 'pre' but fires after component updates so you can access the updated DOM
- `'sync'`: 强制同步触发。
- `'sync'`: forces the effect to always trigger synchronously

**Note:** For `computed`-like composables (e.g. `syncRef`, `controlledComputed`), when flush timing is configurable, the default is changed to `{ flush: 'sync' }` to align them with the way computed refs works in Vue.

### 可配置的全局依赖(Configurable Global Dependencies)

从4.0开始，访问浏览器api的函数将提供一个配置项，供您指定全局依赖项(例如，`window`, `document` and `navigator`)。默认情况下，它会使用全局实例，因此大多数情况你不需要担心它。这个配置在使用iframe和测试环境时非常有用。

From v4.0, functions that access the browser APIs will provide an option fields for you to specify the global dependencies (e.g. `window`, `document` and `navigator`). It will use the global instance by default, so for most of the time, you don't need to worry about it. This configure is useful when working with iframes and testing environments.

```ts
// 访问父级上下文
// accessing parent context
const parentMousePos = useMouse({ window: window.parent })

const iframe = document.querySelect('#my-iframe')

// 访问子级上下文
// accessing child context
const childMousePos = useMouse({ window: iframe.contentWindow })
```

```ts
// testing
const mockWindow = { /* ... */ }

const { x, y } = useMouse({ window: mockWindow })
```
