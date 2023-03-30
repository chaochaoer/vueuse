---
category: Sensors
---

# onKeyStroke

监听键盘事件

Listen for keyboard key being stroked.

## Usage

```js
import { onKeyStroke } from '@vueuse/core'

onKeyStroke('ArrowDown', (e) => {
  e.preventDefault()
})
```

请参阅[此表]( https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/key/Key_Values)了解所有键码。

See [this table]( https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/key/Key_Values) for all key codes.

### 监听多个键(Listen To Multiple Keys)

```js
import { onKeyStroke } from '@vueuse/core'

onKeyStroke(['s', 'S', 'ArrowDown'], (e) => {
  e.preventDefault()
})

// listen to all keys by [true / skip the keyDefine]
onKeyStroke(true, (e) => {
  e.preventDefault()
})
onKeyStroke((e) => {
  e.preventDefault()
})
```

### 自定义事件目标(Custom Event Target)

```js
onKeyStroke('A', (e) => {
  console.log('Key A pressed on document')
}, { target: document })
```

## 使用指令(Directive Usage)

```html
<script setup lang="ts">
import { vOnKeyStroke } from '@vueuse/components'
function onUpdate(e: KeyboardEvent) {
  // impl...
}
</script>

<template>
  <input v-on-key-stroke:c,v="onUpdate" type="text">
  <!-- with options -->
  <input v-on-key-stroke:c,v="[onUpdate, { eventName: 'keyup' }]" type="text">
</template>
```

### 自定义键盘事件(Custom Keyboard Event)

```js
onKeyStroke('Shift', (e) => {
  console.log('Shift key up')
}, { eventName: 'keyup' })
```

Or

```js
onKeyUp('Shift', () => console.log('Shift key up'))
```


## 速记(Shorthands)

- `onKeyDown` - 别名 `onKeyStroke(key, handler, {eventName: 'keydown'})`
- `onKeyPressed` - 别名`onKeyStroke(key, handler, {eventName: 'keypress'})`
- `onKeyUp` -  别名 `onKeyStroke(key, handler, {eventName: 'keyup'})`
