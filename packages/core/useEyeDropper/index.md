---
category: Browser
---

# useEyeDropper

响应式 [EyeDropper API]( https://developer.mozilla.org/zh-CN/docs/Web/API/EyeDropper_API)

Reactive [EyeDropper API]( https://developer.mozilla.org/zh-CN/docs/Web/API/EyeDropper_API)

## Usage

```ts
import { useEyeDropper } from '@vueuse/core'

const { isSupported, open, sRGBHex } = useEyeDropper()
```

## 组件使用(Component Usage)

```html
<UseEyeDropper v-slot="{ isSupported, sRGBHex, open }">
  <button :disabled="!isSupported" @click="open">
    sRGBHex: {{ sRGBHex }}
  </button>
</UseEyeDropper>
```
