---
category: Browser
---

# useWakeLock

响应式[屏幕唤醒 API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API)。提供了一种方法来防止设备在应用程序需要继续运行时调暗或锁定屏幕。

Reactive [Screen Wake Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API). Provides a way to prevent devices from dimming or locking the screen when an application needs to keep running.

## Usage

```js
import { useWakeLock } from '@vueuse/core'

const { isSupported, isActive, request, release } = useWakeLock()
```

如果 `request` 被调用，`isActive` 将为 **true**，如果 `release` 被调用，或显示其他选项卡，或窗口最小化，`isActive` 将为 **false**。

If `request` is called,` isActive` will be **true**, and if `release` is called, or other tab is displayed, or the window is minimized,`isActive` will be **false**.
