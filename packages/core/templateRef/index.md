---
category: Component
---

# templateRef

将 ref 绑定到模板元素的简写。

Shorthand for binding ref to template element.

## Usage

```vue
<script lang="ts">
import { templateRef } from '@vueuse/core'

export default {
  setup() {
    const target = templateRef('target')
    // 无需返回 target，它会自动绑定到模板元素上
    // no need to return the `target`, it will bind to the ref magically
  },
}
</script>

<template>
  <div ref="target" />
</template>
```

### With JSX/TSX

```tsx
import { templateRef } from '@vueuse/core'

export default {
  setup() {
    const target = templateRef<HTMLElement | null>('target', null)

    // use string ref
    return () => <div ref="target"></div>
  },
}
```

### `<script setup>`

在 `<script setup>` 中，所有变量都将暴露在模板中，你可以使用 ref 代替 templateRef，因为它们的功能是相同的。

There is no need for this when using with `<script setup>` since all the variables will be exposed to the template. It will be exactly the same as `ref`.

```vue
<script setup lang="ts">
import { ref } from 'vue'

const target = ref<HTMLElement | null>(null)
</script>

<template>
  <div ref="target" />
</template>
```
