---
category: Sensors
---

# useSpeechSynthesis

响应式 [SpeechSynthesis]( https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesis)

Reactive [SpeechSynthesis]( https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesis).

> [Can I use?](https://caniuse.com/mdn-api_speechsynthesis)

## Usage

```ts
import { useSpeechSynthesis } from '@vueuse/core'

const {
  isSupported,
  isPlaying,
  status,
  voiceInfo,
  utterance,
  error,
  stop,

  toggle,
  speak,
} = useSpeechSynthesis()
```

### Options

The following shows the default values of the options, they will be directly passed to [SpeechSynthesis API]( https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesis).

```ts
useSpeechSynthesis({
  lang: 'en-US',
  pitch: 1,
  rate: 1,
  volume: 1,
})
```
