---
category: Browser
---

# useClipboard

响应式 [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)。剪贴板 API 提供了响应剪贴板命令（剪切、复制和粘贴）与异步读写系统剪贴板的能力。从权限 [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API)。获取权限之后，才能访问剪贴板内容；如果用户没有授予权限，则不允许读取或更改剪贴板内容。

Reactive [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API). Provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard. Access to the contents of the clipboard is gated behind the [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API). Without user permission, reading or altering the clipboard contents is not permitted.

<CourseLink href="https://vueschool.io/lessons/reactive-browser-wrappers-in-vueuse-useclipboard?friend=vueuse">Learn how to reactively save text to the clipboard with this FREE video lesson from Vue School!</CourseLink>

## Usage

```js
import { useClipboard } from '@vueuse/core'

const source = ref('Hello')
const { text, copy, copied, isSupported } = useClipboard({ source })
```

```html
 <div v-if="isSupported">
    <button @click='copy(source)'>
      <!-- by default, `copied` will be reset in 1.5s -->
      <span v-if='!copied'>Copy</span>
      <span v-else>Copied!</span>
    </button>
    <p>
      Current copied: <code>{{ text || 'none' }}</code>
    </p>
  </div>
  <p v-else>
    Your browser does not support Clipboard API
  </p>
```

Set `legacy: true` to keep the ability to copy if [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) is not available. It will handle copy with [execCommand](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand) as fallback.
