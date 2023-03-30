---
category: Browser
---

# useBluetooth

响应式 [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)。提供连接低功耗蓝牙外设并与之交互的能力。

Reactive [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API). Provides the ability to connect and interact with Bluetooth Low Energy peripherals.

Web Bluetooth API 允许网站使用通用属性配置文件 (GATT) 通过蓝牙 4 无线标准找到设备并与之通信。

The Web Bluetooth API lets websites discover and communicate with devices over the Bluetooth 4 wireless standard using the Generic Attribute Profile (GATT).

注意：目前在 Android M、Chrome OS、Mac 和 Windows 10 中实现了一部分。有关浏览器兼容性的完整概述，请参阅[Web Bluetooth API Browser Compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API#browser_compatibility)

N.B. It is currently partially implemented in Android M, Chrome OS, Mac, and Windows 10. For a full overview of browser compatibility please see [Web Bluetooth API Browser Compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API#browser_compatibility)

注意：关于蓝牙API规范，有许多注意事项。有关设备检测和连接的注意事项，请参阅[Web Bluetooth W3C Draft Report](https://webbluetoothcg.github.io/web-bluetooth/) 。

N.B. There are a number of caveats to be aware of with the web bluetooth API specification. Please refer to the [Web Bluetooth W3C Draft Report](https://webbluetoothcg.github.io/web-bluetooth/) for numerous caveats around device detection and connection.

注意:此API在Web Workers中不可用(没有在WorkerNavigator中公开)。

N.B. This API is not available in Web Workers (not exposed via WorkerNavigator).

## Usage Default

```ts
import { useBluetooth } from '@vueuse/core'

const {
  isSupported,
  isConnected,
  device,
  requestDevice,
  server,
} = useBluetooth({
  acceptAllDevices: true,
})
```

```vue
<template>
  <button @click="requestDevice()">
    Request Bluetooth Device
  </button>
</template>
```

当设备配对并连接后，您就可以根据需要使用蓝牙了。

When the device has paired and is connected, you can then work with the server object as you wish.

## 使用电池电量(Usage Battery Level Example)

此示例介绍如何使用 Web Bluetooth API 读取电池电量，并通过低功耗蓝牙从附近的蓝牙设备上获取电池信息。

This sample illustrates the use of the Web Bluetooth API to read battery level and be notified of changes from a nearby Bluetooth Device advertising Battery information with Bluetooth Low Energy.

在这里，我们使用 characteristicvaluechanged 事件侦听器来处理读取电池电量特征值。此事件侦听器也可以处理即将到来的通知。

Here, we use the characteristicvaluechanged event listener to handle reading battery level characteristic value. This event listener will optionally handle upcoming notifications as well.

```ts
import { pausableWatch, useBluetooth } from '@vueuse/core'

const {
  isSupported,
  isConnected,
  device,
  requestDevice,
  server,
} = useBluetooth({
  acceptAllDevices: true,
  optionalServices: [
    'battery_service',
  ],
})

const batteryPercent = ref<undefined | number>()

const isGettingBatteryLevels = ref(false)

const getBatteryLevels = async () => {
  isGettingBatteryLevels.value = true
  // 获取电池服务
  // Get the battery service:
  const batteryService = await server.getPrimaryService('battery_service')
  // 获取当前电池电量
  // Get the current battery level
  const batteryLevelCharacteristic = await batteryService.getCharacteristic(
    'battery_level',
  )
  // 监听 `characteristicvaluechanged` 事件
  // Listen to when characteristic value changes on `characteristicvaluechanged` event:
  batteryLevelCharacteristic.addEventListener('characteristicvaluechanged', (event) => {
    batteryPercent.value = event.target.value.getUint8(0)
  })
  // 将收到的信息转换为数字：
  // Convert received buffer to number:
  const batteryLevel = await batteryLevelCharacteristic.readValue()

  batteryPercent.value = await batteryLevel.getUint8(0)
}

const { stop } = pausableWatch(isConnected, (newIsConnected) => {
  if (!newIsConnected || !server.value || isGettingBatteryLevels.value)
    return
  // 尝试获取设备的电池电量：
  // Attempt to get the battery levels of the device:
  getBatteryLevels()
  // 我们只想在初始连接上运行它，因为我们将使用事件侦听器来处理更新：
  // We only want to run this on the initial connection, as we will use an event listener to handle updates:
  stop()
})
```

```vue
<template>
  <button @click="requestDevice()">
    Request Bluetooth Device
  </button>
</template>
```

更多的例子参见[Google Chrome's Web Bluetooth Samples](https://googlechrome.github.io/samples/web-bluetooth/).

More samples can be found on [Google Chrome's Web Bluetooth Samples](https://googlechrome.github.io/samples/web-bluetooth/).
