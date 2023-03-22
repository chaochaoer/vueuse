---
category: Sensors
---

# usePointerSwipe

基于[PointerEvents](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent)的响应式滑动检测

Reactive swipe detection based on [PointerEvents](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent).

## Usage

```html
<script setup>
import { ref } from 'vue'
import { usePointerSwipe } from '@vueuse/core'

const el = ref(null)
const { isSwiping, direction } = usePointerSwipe(el)
</script>

<template>
  <div ref="el">
    Swipe here
  </div>
</template>
```
