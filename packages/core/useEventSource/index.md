---
category: Network
---

# useEventSource

使用[EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) 或 [Server-Sent-Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) 实例会对 HTTP 服务开启一个持久化的连接，以 text/event-stream 格式发送事件。

An [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) or [Server-Sent-Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) instance opens a persistent connection to an HTTP server, which sends events in text/event-stream format.

## Usage

```js
import { useEventSource } from '@vueuse/core'

const { status, data, error, close } = useEventSource('https://event-source-url')
```

| 状态 | 类型          | 描述                                                                                             |
| ----- | ------------- | ------------------------------------------------------------------------------------------------------- |
| status | `Ref<string>` | 表示连接状态的只读值。可能的值为 CONNECTING (0)、OPEN (1) 或 CLOSED (2)|
| data   | `Ref<string \| null>` | 引用通过 EventSource 接收到的最新数据，可以观察以响应传入的消息 |
| eventSource | `Ref<EventSource \| null>` | 引用当前 EventSource 实例 |

| 方法 | 签名                                  | 描述                            |
| ------ | ------------------------------------------ | ---------------------------------------|
| close  | `() => void` | 关闭 EventSource 连接。  |
