---
category: State
related: createGlobalState
---

# createSharedComposable

让一个钩子函数可用于多个Vue实例中。

Make a composable function usable with multiple Vue instances.

## Usage

```ts
import { createSharedComposable, useMouse } from '@vueuse/core'

const useSharedMouse = createSharedComposable(useMouse)

// CompA.vue
const { x, y } = useSharedMouse()

// CompB.vue - will reuse the previous state and no new event listeners will be registered
const { x, y } = useSharedMouse()
```
