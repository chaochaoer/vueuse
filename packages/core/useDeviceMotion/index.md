---
category: Sensors
---

# useDeviceMotion

响应式 [DeviceMotionEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)，为 web 开发者提供了关于设备的位置和方向的改变速度的信息。

Reactive [DeviceMotionEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent). Provide web developers with information about the speed of changes for the device's position and orientation.

## Usage

```js
import { useDeviceMotion } from '@vueuse/core'

const {
  acceleration,
  accelerationIncludingGravity,
  rotationRate,
  interval,
} = useDeviceMotion()
```

| State                        | Type     | Description                                                                                                          |
| ---------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| acceleration                 | `object` | 提供了设备在 X,Y,Z 轴方向上加速度的对象。                                    |
| accelerationIncludingGravity | `object` | 提供了设备在 X,Y,Z 轴方向上带重力的加速度的对象。           |
| rotationRate                 | `object` | 提供了设备在 alpha、beta、gamma 轴方向上旋转的速率的对象。 |
| interval                     | `Number` | 表示从设备获取数据的间隔时间，单位是毫秒。            |

You can find [more information about the state on the MDN](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent#Properties).


## Component Usage

```html
<UseDeviceMotion v-slot="{ acceleration }">
  Acceleration: {{ acceleration }}
</UseDeviceMotion>
```
