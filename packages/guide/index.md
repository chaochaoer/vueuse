# 起步

<CourseLink href="https://vueschool.io/courses/vueuse-for-everyone?friend=vueuse">Learn VueUse with video</CourseLink>

VueUse是一款基于[组合式API](https://v3.vuejs.org/guide/composition-api-introduction.html)的函数集合。在继续阅读之前，我们假设你已经熟悉了[组合式API](https://v3.vuejs.org/guide/composition-api-introduction.html) 的基本思想.

## 安装

> 🎩 From v4.0, it works for Vue 2 & 3 **within a single package** by the power of [vue-demi](https://github.com/vueuse/vue-demi)!

```bash
npm i @vueuse/core
```

[Add ons](/add-ons.html) | [Nuxt Module](/guide/index.html#nuxt)

> 从v6.0开始，VueUse要求 `vue`版本 >= v3.2 或者 `@vue/composition-api`版本 >= v1.1

###### Demos

- [Vite + Vue 3](https://github.com/vueuse/vueuse-vite-starter)
- [Nuxt 3 + Vue 3](https://github.com/antfu/vitesse-nuxt3)
- [Webpack + Vue 3](https://github.com/vueuse/vueuse-vue3-example)
- [Nuxt 2 + Vue 2](https://github.com/antfu/vitesse-nuxt-bridge)
- [Vue CLI + Vue 2](https://github.com/vueuse/vueuse-vue2-example)

### CDN

```html
<script src="https://unpkg.com/@vueuse/shared"></script>
<script src="https://unpkg.com/@vueuse/core"></script>
```

会暴露一个全局变量 `window.VueUse`

### Nuxt

从v7.2.0开始，我们发布了一个Nuxt模块来支持Nuxt 3和Nuxt Bridge的自动导入

```bash
npm i -D @vueuse/nuxt @vueuse/core
```

Nuxt 3
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
  ],
})
```

Nuxt 2
```ts
// nuxt.config.js
export default {
  buildModules: [
    '@vueuse/nuxt',
  ],
}
```

然后你可以在Nuxt项目的任何地方使用VueUse。例如:

```html
<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
  <div>pos: {{x}}, {{y}}</div>
</template>
```

## 用法用例

在@vueuse/core中导入你需要的函数

```ts
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'

export default {
  setup() {
    // tracks mouse position
    const { x, y } = useMouse()

    // is user prefers dark theme
    const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage(
      'my-storage',
      {
        name: 'Apple',
        color: 'red',
      },
    )

    return { x, y, isDark, store }
  },
}
```

更多细节请参考 [functions list](/functions)。
