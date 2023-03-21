---
category: Sensors
---

# useDeviceOrientation

响应式[DeviceOrientationEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent)。为web开发人员提供运行网页的设备的物理方向信息。

Reactive [DeviceOrientationEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent). Provide web developers with information from the physical orientation of the device running the web page.

## Usage

```js
import { useDeviceOrientation } from '@vueuse/core'

const {
  isAbsolute,
  alpha,
  beta,
  gamma,
} = useDeviceOrientation()
```

| State      | Type     | Description                                                                                                                |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| isAbsolute | `boolean` | 用来说明设备是提供的旋转数据是否是绝对定位的布尔值。                               |
| alpha      | `number` | 一个表示设备绕 z 轴旋转的角度（范围在 0-360 之间）的数字    |
| beta       | `number` | 一个表示设备绕 x 轴旋转（范围在－180 到 180 之间）的数字，从前到后的方向为正方向。 |
| gamma      | `number` | 一个表示设备绕 y 轴旋转（范围在－90 到 90 之间）的数字，从左向右为正方向。  |

You can find [more information about the state on the MDN](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent#Properties).

## Component Usage

```html
<UseDeviceOrientation v-slot="{ alpha, beta, gamma }">
  Alpha: {{ alpha }}
  Beta: {{ beta }}
  Gamma: {{ gamma }}
</UseDeviceOrientation>
```
