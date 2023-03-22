---
category: Sensors
---

# useSwipe

基于 [`TouchEvents`](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent)的响应式滑动检测

Reactive swipe detection based on [`TouchEvents`](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent).

## Usage

```html {16-20}
<template>
  <div ref="el">
    Swipe here
  </div>
</template>

<script>
  setup() {
    const el = ref(null)
    const { isSwiping, direction } = useSwipe(el)

    return { el, isSwiping, direction }
  } 
</script>
```
