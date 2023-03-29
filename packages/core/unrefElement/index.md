---
category: Component
---

# unrefElement

取消对 dom 元素的引用。

Unref for dom element.

## Usage

```html
<template>
  <div ref="div"/>
  <HelloWorld ref="hello"/>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { unrefElement } from '@vueuse/core'

const div = ref() // 绑定 <div> 元素
const hello = ref() // 绑定 HelloWorld 组件

onMounted(() => {
  console.log(unrefElement(div)) // <div> element
  console.log(unrefElement(hello)) // HelloWorld 组件的根元素
})
</script>
```
