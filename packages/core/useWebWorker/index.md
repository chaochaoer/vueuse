---
category: Browser
related: useWebWorkerFn
---

# useWebWorker

简单的 [Web Workers]( https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers) 注册和通信。

Simple [Web Workers]( https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers) registration and communication.

## Usage

```js
import { useWebWorker } from '@vueuse/core'

const { data, post, terminate, worker } = useWebWorker('/path/to/worker.js')
```

| 状态  | 类型                              | 描述                                                                                          |
| ------ | --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| data   | `Ref<any>`                        | 通过worker接收到最新数据，监听传入消息的响应 |
| worker | `ShallowRef<Worker \| undefined>` | WebWorker实例的引用                                                           |

| 方法    | 签名             | 描述                      |
| --------- | --------------------- | -------------------------------- |
| post      | `(data: any) => void` | 给work线程发送数据。 |
| terminate | `() => void`          | 终止work线程。 |
