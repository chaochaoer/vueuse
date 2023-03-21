---
category: Sensors
---

# useFocus

响应式跟踪或设置 DOM 元素的焦点状态。状态变化以反映目标元素是否是焦点元素，从外部设置响应值将分别触发 `focus` 和值的 `blur` 事件。

Reactive utility to track or set the focus state of a DOM element. State changes to reflect whether the target element is the focused element. Setting reactive value from the outside will trigger `focus` and `blur` events for `true` and `false` values respectively.

## Basic Usage

```ts
import { useFocus } from '@vueuse/core'

const target = ref()
const { focused } = useFocus(target)

watch(focused, (focused) => {
  if (focused)
    console.log('input element has been focused')
  else console.log('input element has lost focus')
})
```

## 设定初始焦点(Setting initial focus)

为了让第一次渲染的元素聚焦，可以把`initialValue` 设为 `true`。这将触发目标元素上的 `focus` 事件。

To focus the element on its first render one can provide the `initialValue` option as `true`. This will trigger a `focus` event on the target element.

```ts
import { useFocus } from '@vueuse/core'

const target = ref()
const { focused } = useFocus(target, { initialValue: true })
```

## 改变焦点状态(Change focus state)

`focused` 的响应式引用变化将自动触发 `focus` 和`blur` 事件，值分别为`true`和 `false`。你可以利用这个行为作为聚焦目标元素的另一种方式。

Changes of the `focused` reactive ref will automatically trigger `focus` and `blur` events for `true` and `false` values respectively. You can utilize this behavior to focus the target element as a result of another action (e.g. when a button click as shown below).

```html
<template>
  <div>
    <button type="button" @click="focused = true">点我聚焦下面的输入框</button>
    <input ref="input" type="text">
  </div>
</template>

<script>
import { ref } from 'vue'
import { useFocus } from '@vueuse/core'

export default {
  setup() {
    const input = ref()
    const { focused } = useFocus(input)

    return {
      input,
      focused,
    }
  }
}
</script>
```
