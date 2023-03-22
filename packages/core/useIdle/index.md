---
category: Sensors
---

# useIdle

跟踪用户是否处于非活动状态。

Tracks whether the user is being inactive.

## Usage

```js
import { useIdle } from '@vueuse/core'

const { idle, lastActive } = useIdle(5 * 60 * 1000) // 5 min

console.log(idle.value) // true or false
```

## Component Usage

```html
<UseIdle v-slot="{ idle }" :timeout="5 * 60 * 1000">
  Is Idle: {{ idle }}
</UseIdle>
```
