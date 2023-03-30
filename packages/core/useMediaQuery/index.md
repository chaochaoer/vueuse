---
category: Browser
---

# useMediaQuery

响应式[Media Query]( https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Testing_media_queries)。创建 MediaQueryList 对象后，您可以查询结果或在结果更改时接收通知。

Reactive [Media Query]( https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Testing_media_queries). Once you've created a MediaQueryList object, you can check the result of the query or receive notifications when the result changes.

## Usage

```js
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')
```
