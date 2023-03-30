---
category: Sensors
---

# useNetwork

响应式 [Network status]( https://developer.mozilla.org/zh-CN/docs/Web/API/Network_Information_API)。网络状态 API 可以获取到系统的网络连接信息，比如说连接方式是 WiFi 还是蜂窝。应用程序可以根据此信息为用户展现不同清晰度的内容。该 API 是由 NetworkInformation 接口和 Navigator 接口上新增的一个 connection 属性组成的。

Reactive [Network status]( https://developer.mozilla.org/zh-CN/docs/Web/API/Network_Information_API). The Network Information API provides information about the system's connection in terms of general connection type (e.g., 'wifi', 'cellular', etc.). This can be used to select high definition content or low definition content based on the user's connection. The entire API consists of the addition of the NetworkInformation interface and a single property to the Navigator interface: Navigator.connection.

## Usage

```js
import { useNetwork } from '@vueuse/core'

const { isOnline, offlineAt, downlink, downlinkMax, effectiveType, saveData, type } = useNetwork()

console.log(isOnline.value)
```
To use as an object, wrap it with `reactive()`

```js
import { reactive } from 'vue'

const network = reactive(useNetwork())

console.log(network.isOnline)
```

## Component Usage

```html
<UseNetwork v-slot="{ isOnline, type }">
  Is Online: {{ isOnline }}
  Type: {{ type }}
<UseNetwork>
```
