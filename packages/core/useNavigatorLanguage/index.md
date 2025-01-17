---
category: Sensors
---

# useNavigatorLanguage

响应式  [navigator.language]( https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/language)。

Reactive [navigator.language]( https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/language).

## Usage

```ts
import { defineComponent, ref } from 'vue'
import { useNavigatorLanguage } from '@vueuse/core'

export default defineComponent({
  setup() {
    const { language } = useNavigatorLanguage()

    watch(language, () => {
      // Listen to the value changing
    })

    return {
      language,
    }
  },
})
```
