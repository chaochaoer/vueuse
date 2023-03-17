---
category: Browser
---

# usePreferredDark

响应式深色主题偏好

Reactive dark theme preference.

## Usage

```js
import { usePreferredDark } from '@vueuse/core'

const isDark = usePreferredDark()
```

## Component Usage

```html
<UsePreferredDark v-slot="{ prefersDark }">
  Prefers Dark: {{ prefersDark }}
</UsePreferredDark>
```
