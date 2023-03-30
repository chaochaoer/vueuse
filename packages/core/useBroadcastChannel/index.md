---
category: Browser
---

# useBroadcastChannel

响应式 [BroadcastChannel API]( https://developer.mozilla.org/zh-CN/docs/Web/API/BroadcastChannel). 

Reactive [BroadcastChannel API]( https://developer.mozilla.org/zh-CN/docs/Web/API/BroadcastChannel). 

组件销毁，广播频道自动关闭

Closes a broadcast channel automatically component unmounted.

## Usage

BroadcastChannel 接口代理了一个命名频道，可以让指定 origin 下的任意 browsing context 来订阅它。它允许同源的不同浏览器窗口，Tab 页，frame 或者 iframe 下的不同文档之间相互通信。

The BroadcastChannel interface represents a named channel that any browsing 
context of a given origin can subscribe to. It allows communication between 
different documents (in different windows, tabs, frames, or iframes) of the 
same origin. 

通过触发一个 message 事件，消息可以广播到所有监听了该频道的 BroadcastChannel 对象。

Messages are broadcasted via a message event fired at all BroadcastChannel 
objects listening to the channel.

```js
import { ref } from 'vue-demi'
import { useBroadcastChannel } from '@vueuse/core'

const {
  isSupported,
  channel,
  post,
  close,
  error,
  isClosed,
} = useBroadcastChannel({ name: 'vueuse-demo-channel' })

const message = ref('')

message.value = 'Hello, VueUse World!'

// Post the message to the broadcast channel:
post(message.value)

// Option to close the channel if you wish:
close()
```
