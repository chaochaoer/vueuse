---
category: Browser
---

# useStyleTag

head上注入响应式 `style` 元素

Inject reactive `style` element in head.

## Usage

### Basic usage

提供一个 CSS 字符串，然后 `useStyleTag` 会自动生成一个 id 并将其注入在 `<head>`上。

Provide a CSS string, then `useStyleTag` will automatically generate an id and inject it in `<head>`.
```js
import { useStyleTag } from '@vueuse/core'

const {
  id,
  css,
  load,
  unload,
  isLoaded,
} = useStyleTag('.foo { margin-top: 32px; }')

// Later you can modify styles
css.value = '.foo { margin-top: 64px; }'
```

此代码将被注入到 `<head>`：

This code will be injected to `<head>`:

```html
<style type="text/css" id="vueuse_styletag_1">
.foo { margin-top: 64px; }
</style>
```

### 自定义 ID(Custom ID)

如果你需要定义你自己的id，你可以把 `id` 作为第一个参数传递。

If you need to define your own id, you can pass `id` as first argument.

```js
import { useStyleTag } from '@vueuse/core'

useStyleTag('.foo { margin-top: 32px; }', { id: 'custom-id' })
```

```html
<!-- injected to <head> -->
<style type="text/css" id="custom-id">
.foo { margin-top: 32px; }
</style>
```

### 媒体查询(Media query)

你可以通过最后一个对象参数传递媒体属性。

You can pass media attributes as last argument within object.

```js
useStyleTag('.foo { margin-top: 32px; }', { media: 'print' })
```

```html
<!-- injected to <head> -->
<style type="text/css" id="vueuse_styletag_1" media="print">
.foo { margin-top: 32px; }
</style>
```
