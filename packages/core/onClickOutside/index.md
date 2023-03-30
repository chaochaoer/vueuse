---
category: Sensors
---

# onClickOutside

监听元素外部的点击事件，对模态框和下拉菜单很有用。

Listen for clicks outside of an element. Useful for modal or dropdown.

## Usage

```html {18}
<template>
  <div ref="target">
    Hello world
  </div>
  <div>
    Outside element
  </div>
</template>

<script>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default {
  setup() {
    const target = ref(null)

    onClickOutside(target, (event) => console.log(event))

    return { target }
  }
}
</script>
```
> 此功能使用了[Event.composedPath()]( https://developer.mozilla.org/zh-CN/docs/Web/API/Event/composedPath)，IE 11、Edge 18 及更低版本是不支持的这个方法的。如果您的目标是这些浏览器，我们建议您将[此代码片段](https://gist.github.com/sibbng/13e83b1dd1b733317ce0130ef07d4efd)包含在您的项目中。

> This function uses [Event.composedPath()]( https://developer.mozilla.org/zh-CN/docs/Web/API/Event/composedPath) which is NOT supported by IE 11, Edge 18 and below. If you are targeting these browsers, we recommend you to include [this code snippet](https://gist.github.com/sibbng/13e83b1dd1b733317ce0130ef07d4efd) on your project.

## 使用组件(Component Usage)

```html
<OnClickOutside @trigger="count++" :options="{ ignore: [/* ... */] }">
  <div>
    Click Outside of Me
  </div>
</OnClickOutside>
```
## 使用指令

```html
<script setup lang="ts">
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const modal = ref(false)
function closeModal() {
  modal.value = false
}

</script>

<template>
  <button @click="modal = true">
    Open Modal
  </button>
  <div v-if="modal" v-on-click-outside="closeModal">
    Hello World
  </div>
</template>
```
