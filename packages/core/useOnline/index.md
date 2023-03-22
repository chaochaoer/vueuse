---
category: Sensors
---

# useOnline

响应式在线状态，useNetwork的包装器

Reactive online state. A wrapper of `useNetwork`.

## Usage

```js
import { useOnline } from '@vueuse/core'

const online = useOnline()
```

## Component Usage
```html
<UseOnline v-slot="{ isOnline }">
  Is Online: {{ isOnline }}
</UseOnline>
```
