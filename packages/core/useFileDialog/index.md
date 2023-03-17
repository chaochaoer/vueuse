---
category: Browser
---

# useFileDialog

轻松打开文件对话框。

Open file dialog with ease.

## Usage

```ts
import { useFileDialog } from '@vueuse/core'

const { files, open, reset } = useFileDialog()
```

```html
<template>
  <button type="button" @click="open">选择文件</button>
</template>
```
