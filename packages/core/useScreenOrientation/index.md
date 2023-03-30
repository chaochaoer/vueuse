---
category: Browser
---

# useScreenOrientation

响应式[Screen Orientation API]( https://developer.mozilla.org/zh-CN/docs/Web/API/Screen_Orientation_API)。它为web开发者提供有关用户当前屏幕方向的信息。

Reactive [Screen Orientation API]( https://developer.mozilla.org/zh-CN/docs/Web/API/Screen_Orientation_API). It provides web developers with information about the user's current screen orientation.

## Usage

```ts
import { useScreenOrientation } from '@vueuse/core'

const {
  isSupported,
  orientation,
  angle,
  lockOrientation,
  unlockOrientation,
} = useScreenOrientation()
```

如果要锁定方向，您可以将 [OrientationLockType]( https://developer.mozilla.org/zh-CN/docs/Web/API/ScreenOrientation/type) 传递给 lockOrientation 函数。

To lock the orientation, you can pass an [OrientationLockType]( https://developer.mozilla.org/zh-CN/docs/Web/API/ScreenOrientation/type) to the lockOrientation function:

```ts
import { useScreenOrientation } from '@vueuse/core'

const {
  isSupported,
  orientation,
  angle,
  lockOrientation,
  unlockOrientation,
} = useScreenOrientation()

lockOrientation('portrait-primary')
```

然后再次解锁，使用以下命令：

and then unlock again, with the following:

```ts
unlockOrientation()
```

接受的方向类型是以下类型之一，`"landscape-primary"`, `"landscape-secondary"`, `"portrait-primary"`, `"portrait-secondary"`, `"any"`, `"landscape"`, `"natural"` 和 `"portrait"`.

Accepted orientation types are one of `"landscape-primary"`, `"landscape-secondary"`, `"portrait-primary"`, `"portrait-secondary"`, `"any"`, `"landscape"`, `"natural"` and `"portrait"`.

[Screen Orientation API MDN]( https://developer.mozilla.org/zh-CN/docs/Web/API/Screen_Orientation_API)
