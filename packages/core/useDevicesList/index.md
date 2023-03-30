---
category: Sensors
---

# useDevicesList

列出可用的输入输出设备的响应式列表

Reactive [enumerateDevices]( https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/enumerateDevices) listing available input/output devices.

## Usage

```js
import { useDevicesList } from '@vueuse/core'

const {
  devices,
  videoInputs: cameras,
  audioInputs: microphones,
  audioOutputs: speakers,
} = useDevicesList()
```

# Component
```html
<UseDevicesList v-slot="{ videoInputs, audioInputs, audioOutputs }">
  Cameras: {{ videoInputs }}
  Microphones: {{ audioInputs }}
  Speakers: {{ audioOutputs }}
</UseDevicesList>
```
