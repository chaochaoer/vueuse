---
category: Browser
---

# useUrlSearchParams

响应式[URLSearchParams]( https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)

Reactive [URLSearchParams]( https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)

## Usage

```js
import { useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('history')

console.log(params.foo) // 'bar'

params.foo = 'bar'
params.vueuse = 'awesome'
// url updated to `?foo=bar&vueuse=awesome`
```

### hash模式(Hash Mode)

当使用hash路由时，指定hash模式

When using with hash mode route, specify the `mode` to `hash`

```js
import { useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('hash')

params.foo = 'bar'
params.vueuse = 'awesome'
// url updated to `#/your/route?foo=bar&vueuse=awesome`
```

### hash 参数(Hash Params)

当使用 history 模式，但是需要在 hash 中传递参数时，可以使用`hash-params`模式

When using with history mode route, but want to use hash as params, specify the `mode` to `hash-params`

```js
import { useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('hash-params')

params.foo = 'bar'
params.vueuse = 'awesome'
// url updated to `/your/route#foo=bar&vueuse=awesome`
```
