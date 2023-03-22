---
category: Sensors
---

# useFocusWithin

用于跟踪元素或其后代之一是否获取了焦点的响应式工具。匹配  `:focus-within` 伪类的行为。一个常见的用例是在表单元素上查看整个表单是否获取了焦点。

Reactive utility to track if an element or one of its decendants has focus. It is meant to match the behavior of the `:focus-within` CSS pseudo-class. A common use case would be on a form element to see if any of its inputs currently have focus.

## Basic Usage

```html
<template>
  <form ref="target">
    <input type="text" placeholder="First Name">
    <input type="text" placeholder="Last Name">
    <input type="text" placeholder="Email">
    <input type="text" placeholder="Password">
  </form>
</template>

<script>
import { useFocusWithin } from '@vueuse/core'

const target = ref();
const { focused } = useFocusWithin(target)

watch(focused, focused => {
  if (focused) console.log('Target contains the focused element')
  else console.log('Target does NOT contain the focused element')
})
</script>
```
