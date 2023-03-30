---
category: Sensors
---

# useGeolocation

响应式 [Geolocation API]( https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation_API)。允许用户向 web 应用程序提供他们的位置。出于隐私考虑，报告地理位置前会先请求用户许可。

Reactive [Geolocation API]( https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation_API). It allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.

## Usage

```js
import { useGeolocation } from '@vueuse/core'

const { coords, locatedAt, error, resume, pause } = useGeolocation()
```

| State     | Type                                                                          | Description                                                              |
| --------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| coords    | [`Coordinates`]( https://developer.mozilla.org/zh-CN/docs/Web/API/Coordinates) | 位置信息，如纬度和经度 |
| locatedAt | `Date`                                                                        | 最后一次定位时间                                    |
| error     | `string`                                                                      | 定位失败的失败消息                          |
| resume     | `function`                                                                      | 操作函数更新位置 |
| pause      | `function`                                                                        | 操作函数暂停更新位置 |

## Config

`useGeolocation` 函数将[PositionOptions]( https://developer.mozilla.org/zh-CN/docs/Web/API/PositionOptions)对象作为可选参数。

`useGeolocation` function takes [PositionOptions]( https://developer.mozilla.org/zh-CN/docs/Web/API/PositionOptions) object as an optional parameter.


## Component Usage

```html
<UseGeolocation v-slot="{ coords: { latitude, longitude } }">
  Latitude: {{ latitude }}
  Longitude: {{ longitude }}
</UseGeolocation>
```
