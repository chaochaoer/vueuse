---
category: Browser
---

# useVibrate

响应式 [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)

Reactive [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)

大多数现代移动设备都包含振动硬件，它可以让软件代码通过使设备振动来向用户提供物理反馈。

Most modern mobile devices include vibration hardware, which lets software 
code provides physical feedback to the user by causing the device to shake. 

振动 API 为 Web 应用程序提供了访问该硬件（如果存在）的能力，如果设备不支持它则什么也不做。

The Vibration API offers Web apps the ability to access this hardware, 
if it exists, and does nothing if the device doesn't support it.

## Usage

振动被描述为一种开关脉冲，长度不定。

Vibration is described as a pattern of on-off pulses, which may be of varying 
lengths. 

规则可以由单个整数组成，描述振动的毫秒数，也可以由一组整数组成，描述振动和暂停的模式。

The pattern may consist of either a single integer describing the 
number of milliseconds to vibrate, or an array of integers describing 
a pattern of vibrations and pauses.

```ts
import { useVibrate } from '@vueuse/core'

// This vibrates the device for 300 ms
// then pauses for 100 ms before vibrating the device again for another 300 ms:
const { vibrate, stop, isSupported } = useVibrate({ pattern: [300, 100, 300] })

// Start the vibration, it will automatically stop when the pattern is complete:
vibrate()

// But if you want to stop it, you can:
stop()
```
