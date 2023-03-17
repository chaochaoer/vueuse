---
category: Browser
---

# useShare

响应式 [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)。浏览器提供可以共享文本或文件内容的功能。

Reactive [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share). The Browser provides features that can share content in text or file.

> `share` 方法必须在用户动作如单击按钮后调用。例如，它不能简单地在页面加载时调用。这有助于防止滥用。

> The `share` method has to be called following a user gesture like a button click. It can’t simply be called on page load for example. That’s in place to help prevent abuse.

## Usage

```js
import { useShare } from '@vueuse/core'

const { share, isSupported } = useShare()

function startShare() {
  share({
    title: 'Hello',
    text: 'Hello my friend!',
    url: location.href,
  })
}
```


### Passing a source ref

您可以给它传个 `ref` ，源引用的更改将作用到到您的共享选项上。

You can pass a `ref` to it, changes from the source ref will be reflected to your sharing options.

```js {7}
import { ref } from 'vue'

const shareOptions = ref < ShareOptions > ({ text: 'foo' })
const { share, isSupported } = useShare(shareOptions)

shareOptions.value.text = 'bar'

share()
```
