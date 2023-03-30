---
category: Browser
---

# useVibrate

响应式 [Vibration API]( https://developer.mozilla.org/zh-CN/docs/Web/API/Vibration_API)

Reactive [Vibration API]( https://developer.mozilla.org/zh-CN/docs/Web/API/Vibration_API)

大多数现代移动设备包括振动硬件，其允许软件代码通过使设备摇动来向用户提供物理反馈。

Most modern mobile devices include vibration hardware, which lets software 
code provides physical feedback to the user by causing the device to shake. 

Vibration API 为 Web 应用程序提供访问此硬件（如果存在）的功能，如果设备不支持此功能，则不会执行任何操作。

The Vibration API offers Web apps the ability to access this hardware, 
if it exists, and does nothing if the device doesn't support it.

## Usage

振动被抽象成【开 - 关】脉冲的模式，且可以具有变化的长度。

Vibration is described as a pattern of on-off pulses, which may be of varying 
lengths. 

参数可以是单个整数，表示持续振动的毫秒数 (ms)；或可由多个整数组成的数组，达到振动和暂停循环的效果。

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
