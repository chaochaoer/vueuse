---
category: Browser
---

# usePreferredColorScheme

响应式 [prefers-color-scheme]( https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme) 

Reactive [prefers-color-scheme]( https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme) media query.

## Usage

```js
import { usePreferredColorScheme } from '@vueuse/core'

const preferredColor = usePreferredColorScheme()
```

## Component Usage

```html
<UsePreferredColorScheme v-slot="{ colorScheme }">
  首选配色方案: {{ colorScheme }}
<UsePreferredColorScheme>
```
