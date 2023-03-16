---
category: Browser
---

# useBrowserLocation

响应式获取 Location

Reactive browser location

> 注意：如果您使用的是 Vue Router，请改用 useRoute 获取

> NOTE: If you're using Vue Router, use [`useRoute`](https://router.vuejs.org/guide/advanced/composition-api.html) provided by Vue Router instead.

## Usage

```js
import { useBrowserLocation } from '@vueuse/core'

const location = useBrowserLocation()
```

## Component Usage

```html
<UseBrowserLocation v-slot="{ location }">
  Browser Location: {{ location }}
</UseBrowserLocation>
```
