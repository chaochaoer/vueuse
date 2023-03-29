---
category: Component
---

# useTemplateRefsList

将 refs 绑定到 v-for 中的模板元素和组件的简写。

Shorthand for binding refs to template elements and components inside `v-for`.

> 这个功能只能在 Vue 3.x 中使用
> This function only works for Vue 3.x.

## Usage

```html
<template>
  <div v-for="i of 5" :key="i" :ref="refs.set"></div>
</template>

<script setup lang="ts">
import { onUpdated } from 'vue'
import { useTemplateRefsList } from '@vueuse/core'

const refs = useTemplateRefsList<HTMLDivElement>()

onUpdated(() => {
  console.log(refs)
})
</script>
```
