---
category: Sensors
---

# useDevicePixelRatio

响应式跟踪[`window.devicePixelRatio`](https://developer.mozilla.org/ru/docs/Web/API/Window/devicePixelRatio)

Reactively track [`window.devicePixelRatio`](https://developer.mozilla.org/ru/docs/Web/API/Window/devicePixelRatio)
>
> 注意： `window.devicePixelRatio` 的变化没有事件监听器。所以使用这个函数 [`Testing media queries programmatically (window.matchMedia)`]( https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Testing_media_queries)去模拟相同的机制，请参阅[这个例子]( https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes).

> NOTE: there is no event listener for `window.devicePixelRatio` change. So this function uses [`Testing media queries programmatically (window.matchMedia)`]( https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Testing_media_queries) applying the same mechanism as described in [this example]( https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes).

## Usage

```js
import { useDevicePixelRatio } from '@vueuse/core'

export default {
  setup() {
    const { pixelRatio } = useDevicePixelRatio()

    return { pixelRatio }
  },
}
```

## Component Usage

```html
<UseDevicePixelRatio v-slot="{ pixelRatio }">
  Pixel Ratio: {{ pixelRatio }}
</UseDevicePixelRatio>
```
