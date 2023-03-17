---
category: Browser
---

# useScriptTag

注入 script 标签

Script tag injecting.

## Usage

```js
import { useScriptTag } from '@vueuse/core'

useScriptTag(
  'https://player.twitch.tv/js/embed/v1.js',
  // on script tag loaded.
  (el: HTMLScriptElement) => {
    // do something
  },
)
```

加载的script标签会在组件卸载时自动移除。

script将自动加载在组件上，并在组件卸载时删除。

The script will be automatically loaded on the component mounted and removed when the component on unmounting.

## 配置(Configurations)

设置 `manual: true` 为手动控制加载和卸载。

Set `manual: true` to have manual control over the timing to load the script.

```ts
import { useScriptTag } from '@vueuse/core'

const { scriptTag, load, unload } = useScriptTag(
  'https://player.twitch.tv/js/embed/v1.js',
  () => {
    // do something
  },
  { manual: true },
)

// manual controls
await load()
await unload()
```
