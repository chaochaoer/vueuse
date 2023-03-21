---
category: Sensors
---

# useBattery

响应式 [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API)，通常称为 Battery API，提供有关系统电池电量的信息，并让您在电池电量或充电状态发生变化时收到发送的事件通知。这可用于调整您的应用程序的资源使用情况，以减少电池电量不足时的电池消耗，或在电池电量耗尽之前保存更改以防止数据丢失。

Reactive [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API), more often referred to as the Battery API, provides information about the system's battery charge level and lets you be notified by events that are sent when the battery level or charging status change. This can be used to adjust your app's resource usage to reduce battery drain when the battery is low, or to save changes before the battery runs out in order to prevent data loss.

## Usage

```js
import { useBattery } from '@vueuse/core'

const { charging, chargingTime, dischargingTime, level } = useBattery()
```

| State           | Type      | Description                                                       |
| --------------- | --------- | ----------------------------------------------------------------- |
| charging        | `Boolean` | 如果设备当前正在充电。                           |
| chargingTime    | `Number`  | 设备充满电所需的秒数。     |
| dischargingTime | `Number`  | 距离电池耗电至空需要多少秒。 |
| level           | `Number`  | 0到1之间的数字，代表系统电量的水平   |

## Use-cases

我们的应用程序通常不会感知到电池电量，我们可以对我们的应用程序进行一些调整，使其对低电量用户更友好。

Our applications normally are not empathetic to battery level, we can make a few adjustments to our applications that will be more friendly to low battery users.

- 触发“暗黑模式”省电主题来来省电。
- Trigger a special "dark-mode" battery saver theme settings.
- 停止在新闻推送自动播放视频。
- Stop auto playing videos in news feeds.
- 禁用一些不重要的后台。
- Disable some background workers that are not critical.
- 限制网络调用，降低CPU/内存消耗
- Limit network calls and reduce CPU/Memory consumption.


## Component Usage
```html
<UseBattery v-slot="{ charging }">
  Is Charging: {{ charging }}
</UseBattery>
```
