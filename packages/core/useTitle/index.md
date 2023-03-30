---
category: Browser
---

# useTitle

响应式document title

Reactive document title.

当与 Nuxt3 一起使用时，这个函数将不会自动导入支持 Nuxt 的内置useTitle(). 如果你想使用 VueUse 中的函数，请使用显式导入。

When using with Nuxt 3, this function will **NOT** be auto imported in favor of Nuxt's built-in `useTitle()`.
Use explicit import if you want to use the function from VueUse.
:::

## Usage

```js
import { useTitle } from '@vueuse/core'

const title = useTitle()
console.log(title.value) // print current title
title.value = 'Hello' // change current title
```

设置初始标题:

Set initial title immediately:

```js
const title = useTitle('New Title')
```

使用响应式值，当值改变时，标题也会改变

Pass a `ref` and the title will be updated when the source ref changes:

```js
import { useTitle } from '@vueuse/core'

const messages = ref(0)

const title = computed(() => {
  return !messages.value ? 'No message' : `${messages.value} new messages`
})

useTitle(title) // document title will match with the ref "title"
```

传递可选的模板标签[Vue Meta Title Template](https://vue-meta.nuxtjs.org/guide/metainfo.html) 以更新要注入此模板的标题：

Pass an optional template tag [Vue Meta Title Template](https://vue-meta.nuxtjs.org/guide/metainfo.html) to update the title to be injected into this template:

```js
const title = useTitle('New Title', { titleTemplate: '%s | My Awesome Website' })
```

:::警告

`observe` 与 `titleTemplate` 不兼容 。

`observe` is incompatible with `titleTemplate`.
