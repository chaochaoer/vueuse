---
category: Browser
---

# useEventListener
轻松使用事件监听。在挂载时使用 [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)  注册，在卸载时自动使用 [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) 。

Use EventListener with ease. Register using [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) on mounted, and [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) automatically on unmounted.

## Usage

```js
import { useEventListener } from '@vueuse/core'

useEventListener(document, 'visibilitychange', (evt) => {
  console.log(evt)
})
```

您还可以传递一个 ref 作为事件目标，`useEventListener` 当您更改目标时，将注销前一个事件并注册新事件。

You can also pass a ref as the event target, `useEventListener` will unregister the previous event and register the new one when you change the target.

```ts
import { useEventListener } from '@vueuse/core'

const element = ref<HTMLDivElement>()
useEventListener(element, 'keydown', (e) => {
  console.log(e.key)
})
```

```html
<template>
  <div v-if="cond" ref="element">Div1</div>
  <div v-else ref="element">Div2</div>
</template>
```

您还可以调用返回的方法来注销侦听器。

You can also call the returned to unregister the listener.

```ts
import { useEventListener } from '@vueuse/core'

const cleanup = useEventListener(document, 'keydown', (e) => {
  console.log(e.key)
})

// 这将注销监听器。
// This will unregister the listener.
cleanup()
```
