---
category: Sensors
---

# useKeyModifier

响应式 [键盘修饰键状态]( https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/getModifierState)。跟踪任何[修饰键]( https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/getModifierState#browser_compatibility)的状态 - 请参阅浏览器兼容性说明。

Reactive [Modifier State]( https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/getModifierState). Tracks state of any of the [supported modifiers]( https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/getModifierState#browser_compatibility) - see Browser Compatibility notes.

<CourseLink href="https://vueschool.io/lessons/alt-drag-to-clone-tasks?friend=vueuse">Learn useKeyModifier with this FREE video lesson from Vue School!</CourseLink>

## Usage

```ts
import { useKeyModifier } from '@vueuse/core'

const capsLockState = useKeyModifier('CapsLock')

console.log(capsLockState.value)
```

## Events

You can customize which events will prompt the state to update. By default, these are `mouseup`, `mousedown`, `keyup`, `keydown`. To customize these events:

```ts
import { useKeyModifier } from '@vueuse/core'

const capsLockState = useKeyModifier('CapsLock', { events: ['mouseup', 'mousedown'] })

console.log(capsLockState) // null

// Caps Lock turned on with key press
console.log(capsLockState) // null

// Mouse button clicked
console.log(capsLockState) // true
```

## Initial State

By default, the returned ref will be `Ref<null>` until the first event is received. You can explicitly pass the initial state to it via:

```ts
const capsLockState1 = useKeyModifier('CapsLock') // Ref<boolean | null>
const capsLockState2 = useKeyModifier('CapsLock', { initial: false }) // Ref<boolean>
```
