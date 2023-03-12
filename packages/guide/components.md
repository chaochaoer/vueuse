# 组件(Components)

v5.0，我们引入了一个新的包，`@vueuse/components`提供了可组合函数的无渲染组件版本。

In v5.0, we introduced a new package, `@vueuse/components` providing renderless component versions of composable functions.

## 安装(Install)

```bash
$ npm i @vueuse/core @vueuse/components
```

## 用法(Usage)

以 `onClickOutside` 为例, 代替用hook去消费ref绑定组件的形式:

For example of `onClickOutside`, instead of binding the component ref for functions to consume:

```html
<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const el = ref()

function close () {
  /* ... */
}

onClickOutside(el, close)
</script>

<template>
  <div ref="el">
    Click Outside of Me
  </div>
</template>
```

现在我们可以使用自动绑定的renderless组件:

We can now use the renderless component which the binding is done automatically:

```html
<script setup>
import { OnClickOutside } from '@vueuse/components'

function close () {
  /* ... */
}
</script>

<template>
  <OnClickOutside @trigger="close">
    <div>
      Click Outside of Me
    </div>
  </OnClickOutside>
</template>
```

## 返回值(Return Value)

你可以使用 `v-slot` 获取返回值:

You can access return values with `v-slot`:

```html
<UseMouse v-slot="{ x, y }">
  x: {{ x }}
  y: {{ y }}
</UseMouse>
```

```html
<UseDark v-slot="{ isDark, toggleDark }">
  <button @click="toggleDark()">
    Is Dark: {{ isDark }}
  </button>
</UseDark>
```

有关组件样式的详细用法，请参阅每个函数的文档。

Refer to each function's documentation for the detailed usage of component style.
