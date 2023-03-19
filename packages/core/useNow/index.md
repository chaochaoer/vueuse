---
category: Animation
---

# useNow

响应式获取当前 Date 实例。

Reactive current Date instance.

## Usage

```js
import { useNow } from '@vueuse/core'

const now = useNow()
```

```js
const { now, pause, resume } = useNow({ controls: true })
```

## Component Usage

```html
<UseNow v-slot="{ now, pause, resume }">
  Now: {{ now }}
  <button @click="pause()">Pause</button>
  <button @click="resume()">Resume</button>
</UseNow>
```
