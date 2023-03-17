---
category: Browser
---

# useFullscreen

响应式[Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)。它添加了以全屏模式呈现特定元素（及其后代）的方法，并在不再需要时退出全屏模式。这使得可以使用用户的整个屏幕呈现所需的内容（例如在线游戏），从屏幕上删除所有浏览器用户界面元素和其他应用程序，直到关闭全屏模式。

Reactive [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API). It adds methods to present a specific Element (and its descendants) in full-screen mode, and to exit full-screen mode once it is no longer needed. This makes it possible to present desired content—such as an online game—using the user's entire screen, removing all browser user interface elements and other applications from the screen until full-screen mode is shut off.

## Usage

```js
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, enter, exit, toggle } = useFullscreen()
```

Fullscreen specified element

```ts
const el = ref<HTMLElement | null>(null)

const { isFullscreen, enter, exit, toggle } = useFullscreen(el)
```

```html
<video ref='el'>
```

## Component Usage

```html
<UseFullscreen v-slot="{ toggle }">
  <video />
  <button @click="toggle">
    Go Fullscreen
  </button>
</UseFullscreen>
```
