---
category: Browser
---

# usePreferredContrast

响应式 [prefers-contrast]( https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-contrast) 

Reactive [prefers-contrast]( https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-contrast) media query.

## Usage

```js
import { usePreferredContrast } from '@vueuse/core'

const preferredContrast = usePreferredContrast()
```

## Component Usage

```html
<UsePreferredContrast v-slot="{ contrast }">
  Preferred Color Scheme: {{ contrast }}
<UsePreferredContrast>
```
