---
category: Browser
---

# useFavicon
响应式 favicon

Reactive favicon

## Usage

```js {3}
import { useFavicon } from '@vueuse/core'

const icon = useFavicon()

icon.value = 'dark.png' // change current icon
```

### 传递一个ref(Passing a source ref)

您也可以传递 `ref` 给它，ref的更改将自动作用到你的图标。

You can pass a `ref` to it, changes from of the source ref will be reflected to your favicon automatically.

```js {7}
import { computed } from 'vue'
import { useFavicon, usePreferredDark } from '@vueuse/core'

const isDark = usePreferredDark()
const favicon = computed(() => isDark.value ? 'dark.png' : 'light.png')

useFavicon(favicon)
```
传递ref时，返回引用将与ref相同

When a source ref is passed, the return ref will be identical to the source ref

```ts
const source = ref('icon.png')
const icon = useFavicon(source)

console.log(icon === source) // true
```
