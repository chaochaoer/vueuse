---
category: Browser
related:
  - useDark
  - usePreferredDark
  - useStorage
---

# useColorMode

具有自动数据持久性的响应式颜色模式（深色//自定义）。

## 基本使用

```js
import { useColorMode } from '@vueuse/core'

const mode = useColorMode() // Ref<'dark' | 'light'>
```

默认情况下，它将使用  `usePreferredDark` （auto模式）与用户的浏览器偏好相匹配。读取 ref 时，默认情况下它将返回当前颜色模式（深色，浅色或你的自定义模式）。通过启用该选项，可以将模式 auto 包含在返回的模式中  `emitAuto`。当写入 ref 时，它会触发 DOM 更新并将颜色模式保存到本地存储（或您的自定义存储）。您可以 `auto` 通过设置回自动模式。

By default, it will match with users' browser preference using `usePreferredDark` (a.k.a `auto` mode). When reading the ref, it will by default return the current color mode (`dark`, `light` or your custom modes). The `auto` mode can be included in the returned modes by enabling the `emitAuto` option. When writing to the ref, it will trigger DOM updates and persist the color mode to local storage (or your custom storage). You can pass `auto` to set back to auto mode.

```ts
mode.value // 'dark' | 'light'

mode.value = 'dark' // change to dark mode and persist

mode.value = 'auto' // change to auto mode
```

## Config

```js
import { useColorMode } from '@vueuse/core'

const mode = useColorMode({
  attribute: 'theme',
  modes: {
    // custom colors
    dim: 'dim',
    cafe: 'cafe',
  },
}) // Ref<'dark' | 'light' | 'dim' | 'cafe'>
```

## Component Usage

```html
<UseColorMode v-slot="{ mode }">
  <button @click="mode = mode === 'dark' ? 'light' : 'dark'">
    Mode {{ mode }}
  </button>
</UseColorMode>
```
