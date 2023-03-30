---
category: Browser
---

# usePreferredLanguages

响应式 [Navigator Languages]( https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorLanguage/languages)。为web开发人员提供有关用户首选语言的信息。例如，这可能有助于根据用户的首选语言调整用户界面的语言，以提供更好的体验。

Reactive [Navigator Languages]( https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorLanguage/languages). It provides web developers with information about the user's preferred languages. For example, this may be useful to adjust the language of the user interface based on the user's preferred languages in order to provide better experience.

## Usage

```js
import { usePreferredLanguages } from '@vueuse/core'

const languages = usePreferredLanguages()
```

## Component Usage

```html
<UsePreferredLanguages v-slot="{ languages }">
  Preferred Languages: {{ languages }}
</UsePreferredLanguages>
```
