---
category: Sensors
---

# onStartTyping

当用户开始在不可编辑的元素上输入时触发。

Fires when users start typing on non-editable elements.

## Usage

```html
<input ref="input" type="text" placeholder="Start typing to focus" />
```

```ts {7-10}
import { onStartTyping } from '@vueuse/core'

export default {
  setup() {
    const input = ref(null)

    onStartTyping(() => {
      if (!input.value.active)
        input.value.focus()
    })

    return {
      input,
    }
  },
}
```
