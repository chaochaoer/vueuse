---
category: Browser
---

# usePermission

响应式 [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API)。权限 API 提供的工具允许开发者在权限方面实现更好的用户体验。

Reactive [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API). The Permissions API provides the tools to allow developers to implement a better user experience as far as permissions are concerned.

## Usage

```js
import { usePermission } from '@vueuse/core'

const microphoneAccess = usePermission('microphone')
```
