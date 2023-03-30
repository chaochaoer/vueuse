---
category: Browser
---

# usePreferredReducedMotion

响应式[prefers-reduced-motion]( https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion)

Reactive [prefers-reduced-motion]( https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion) media query.

## Usage

```js
import { usePreferredReducedMotion } from '@vueuse/core'

const preferredMotion = usePreferredReducedMotion()
```

## Component Usage

```html
<UsePreferredReducedMotion v-slot="{ motion }">
  Preferred Color Scheme: {{ motion }}
<UsePreferredReducedMotion>
```
