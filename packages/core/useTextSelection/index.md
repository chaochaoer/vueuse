---
category: Sensors
---

# useTextSelection

基于 [`Window.getSelection`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection) 响应式跟踪用户文本选择

Reactively track user text selection based on [`Window.getSelection`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection).

## Usage

```html
<template>
  <p>{{state.text}}</p>
</template>

<script setup lang="ts">
  import { useTextSelection } from '@vueuse/core'
  const state = useTextSelection()
</script>
```
