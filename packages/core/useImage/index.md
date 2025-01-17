---
category: Browser
---

# useImage

在浏览器中响应式加载图像，你可以等待结果显示或显示一个回退方案

Reactive load an image in the browser, you can wait the result to display it or show a fallback.

## Usage

```html
<script setup>
import { useImage } from '@vueuse/core'

const avatarUrl = 'https://place.dog/300/200'
const { isLoading } = useImage({ src: avatarUrl })
</script>

<template>
  <span v-if="isLoading">Loading</span>
  <img v-else :src="avatarUrl">
</template>
```

## Component Usage

```html
<template>
  <UseImage src="https://place.dog/300/200">
    <template #loading>
      Loading..
    </template>

    <template #error>
      Failed
    </template>
  </UseImage>
</template>
```
