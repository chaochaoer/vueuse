---
category: Sensors
---

# useSpeechRecognition

响应式[SpeechRecognition]( https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechRecognition)。

Reactive [SpeechRecognition]( https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechRecognition).

> [Can I use?](https://caniuse.com/mdn-api_speechrecognitionevent)
## Usage

```ts
import { useSpeechRecognition } from '@vueuse/core'

const {
  isSupported,
  isListening,
  isFinal,
  result,
  start,
  stop,
} = useSpeechRecognition()
```

### Options

The following shows the default values of the options, they will be directly passed to [SpeechRecognition API]( https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechRecognition).

```ts
useSpeechRecognition({
  lang: 'en-US',
  interimResults: true,
  continuous: true,
})
```
