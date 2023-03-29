---
category: Component
---

# tryOnScopeDispose

安全执行 `onScopeDispose`。如果它在effect作用域生命周期内，则调用 `onScopeDispose()`，如果不在，则什么都不做

Safe `onScopeDispose`. Call `onScopeDispose()` if it's inside an effect scope lifecycle, if not, do nothing

## Usage

```js
import { tryOnScopeDispose } from '@vueuse/core'

tryOnScopeDispose(() => {

})
```
