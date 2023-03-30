---
category: Browser
---

# useObjectUrl

响应式的用URL表示对象

Reactive URL representing an object.

通过 [URL.createObjectURL()]( https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL) 给File、Blob 或 MediaSource 创建 URL，并在源更改或组件卸载时通过 [URL.revokeObjectURL()]( https://developer.mozilla.org/zh-CN/docs/Web/API/URL/revokeObjectURL) 自动释放 URL 。

Creates an URL for the provided `File`, `Blob`, or `MediaSource` via [URL.createObjectURL()]( https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL) and automatically releases the URL via [URL.revokeObjectURL()]( https://developer.mozilla.org/zh-CN/docs/Web/API/URL/revokeObjectURL) when the source changes or the component is unmounted.

## Usage

```html
<script setup>
import { useObjectUrl } from '@vueuse/core'
import { shallowRef } from 'vue'

const file = shallowRef()
const url = useObjectUrl(file)

const onFileChange = (event) => {
  file.value = event.target.files[0]
}
</script>

<template>
  <input type="file" @change="onFileChange" />

  <a :href="url">Open file</a>
</template>
```

## Component Usage

```html
<template>
  <UseObjectUrl v-slot="url" :object="file">
    <a :href="url">Open file</a>
  </UseObjectUrl>
</template>
```
