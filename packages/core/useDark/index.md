---
category: Browser
related:
  - useColorMode
  - usePreferredDark
  - useStorage
---

# useDark

具有自动数据持久性的响应式暗色模式。

Reactive dark mode with auto data persistence.

<CourseLink href="https://vueschool.io/lessons/theming-with-vueuse-usedark-and-usecolormode?friend=vueuse">Learn useDark with this FREE video lesson from Vue School!</CourseLink>

## 基本使用(Basic Usage)

```js
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
```

## 行为(Behavior)

`useDark` 结合 `usePreferredDark` 和 `useStorage`。启动时，它会从 localStorage/sessionStorage（key 是可配置的）中读取值，以查看是否有用户配置的配色方案，如果没有，它将使用用户的系统偏好设置。当您更改 `isDark` ref 时，它会更新相应元素的属性，然后将首选项存储到 storage (默认 key: `vueuse-color-scheme`) 以进行持久化。

`useDark` combines with `usePreferredDark` and `useStorage`. On start up, it reads the value from localStorage/sessionStorage (the key is configurable) to see if there is a user configured color scheme, if not, it will use users' system preferences. When you change the `isDark` ref, it will update the corresponding element's attribute and then store the preference to storage (default key: `vueuse-color-scheme`) for persistence.

> 请注意 `useDark` 只处理DOM属性变化，以便你在CSS中应用合适的选择器。它不会为你处理实际的样式、主题或CSS。

> Please note `useDark` only handles the DOM attribute changes for you to apply proper selector in your CSS. It does NOT handle the actual style, theme or CSS for you.

## 配置(Configuration)

默认情况下，它使用 [Tailwind CSS favored dark mode](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually),当类 `dark` 应用于 `html` 标签时启用暗模式，例如：

By default, it uses [Tailwind CSS favored dark mode](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually), which enables dark mode when class `dark` is applied to the `html` tag, for example:

```html
<!--light-->
<html> ... </html>

<!--dark-->
<html class="dark"> ... </html>
```

不过，您也可以自定义它以使其适用于大多数 CSS 框架。

Still, you can also customize it to make it work with most CSS frameworks.

例如

For example:

```ts
const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})
```
会像

will work like

```html
<!--light-->
<html>
  <body color-scheme="light"> ... </body>
</html>

<!--dark-->
<html>
  <body color-scheme="dark"> ... </body>
</html>
```

如果上述配置仍然不能满足您的需求，您可以使用该 `onChanged` 选项来完全控制您处理更新的方式。

If the configuration above still does not fit your needs, you can use the`onChanged` option to take full control over how you handle updates.

```ts
const isDark = useDark({
  onChanged(dark: boolean) {
    // update the dom, call the API or something
  },
})
```

## Component Usage

```html
<UseDark v-slot="{ isDark, toggleDark }">
  <button @click="toggleDark()">
    Is Dark: {{ isDark }}
  </button>
</UseDark>
```
