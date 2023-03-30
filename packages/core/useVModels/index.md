---
category: Component
related: useVModel
---

# useVModels

props v-model 简写。可以把它想象成 `toRefs(props)`，但变化也会触发更新。

Shorthand for props v-model binding. Think it like `toRefs(props)` but changes will also trigger emit.

## Usage

```js
import { useVModels } from '@vueuse/core'

export default {
  props: {
    foo: String,
    bar: Number,
  },
  setup(props, { emit }) {
    const { foo, bar } = useVModels(props, emit)

    console.log(foo.value) // props.foo
    foo.value = 'foo' // emit('update:foo', 'foo')
  },
}
```
