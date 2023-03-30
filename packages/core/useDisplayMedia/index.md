---
category: Sensors
related: useUserMedia
---

# useDisplayMedia

响应式 [`mediaDevices.getDisplayMedia`]( https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getDisplayMedia)流

Reactive [`mediaDevices.getDisplayMedia`]( https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getDisplayMedia) streaming.

## Usage

```ts
import { useDisplayMedia } from '@vueuse/core'

const { stream, start } = useDisplayMedia()

// start streaming

start()
```

```ts
const video = document.getElementById('video')

watchEffect(() => {
  // preview on a video element
  video.srcObject = stream.value
})
```
