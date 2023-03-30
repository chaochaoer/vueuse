---
category: Network
---

# useWebSocket

响应式 [WebSocket]( https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/WebSocket) .

Reactive [WebSocket]( https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/WebSocket) client.

## Usage

```js
import { useWebSocket } from '@vueuse/core'

const { status, data, send, open, close } = useWebSocket('ws://websocketurl')
```

更多选项请看[Type Declarations](#type-declarations)

See the [Type Declarations](#type-declarations) for more options.

### Immediate

自动连接（默认启用）。

Auto-connect (enabled by default).

将自动调用open()，您不需要自己调用它。

This will call `open()` automatically for you and you don't need to call it by yourself.

如果url是作为ref提供的，这也控制当其值更改时是否重新建立连接（或者是否需要再次调用 open() 以使更改生效）。

If url is provided as a ref, this also controls whether a connection is re-established when its value is changed (or whether you need to call open() again for the change to take effect).

### 自动关闭(Auto-close)
自动关闭连接（默认启用）。

Auto-close-connection (enabled by default).

当`beforeunload`事件触发或者与之关联的effect scope被stopped，`close()` 将被自动调用

This will call `close()` automatically when the `beforeunload` event is triggered or the associated effect scope is stopped.

### 自动重连(Auto-reconnection)

发生error时自动重连（默认禁用）。

Reconnect on errors automatically (disabled by default).

```js
const { status, data, close } = useWebSocket('ws://websocketurl', {
  autoReconnect: true,
})
```

或者进行更多操作：

Or with more controls over its behavior:

```js
const { status, data, close } = useWebSocket('ws://websocketurl', {
  autoReconnect: {
    retries: 3,
    delay: 1000,
    onFailed() {
      alert('Failed to connect WebSocket after 3 retries')
    },
  },
})
```

显式调用 close() 不会触发自动重新连接。

Explicitly calling `close()` won't trigger the auto reconnection.

### 心跳(Heartbeat)

通常的做法是在每个给定时间发送一条消息（心跳），以保持连接处于活动状态。在这个函数中，我们提供了一个方便的方式来完成它：

It's common practice to send a small message (heartbeat) for every given time passed to keep the connection active. In this function we provide a convenient helper to do it:

```js
const { status, data, close } = useWebSocket('ws://websocketurl', {
  heartbeat: true,
})
```

或者更多：

Or with more controls:

```js
const { status, data, close } = useWebSocket('ws://websocketurl', {
  heartbeat: {
    message: 'ping',
    interval: 1000,
    pongTimeout: 1000,
  },
})
```

### 子协议(Sub-protocols)

列出一个或多个要使用的子协议，在本例中是soap和wamp。

List of one or more subprotocols to use, in this case soap and wamp.

```js
import { useWebSocket } from '@vueuse/core'

const { status, data, send, open, close } = useWebSocket('ws://websocketurl', {
  protocols: ['soap'], // ['soap', 'wamp']
})
```
