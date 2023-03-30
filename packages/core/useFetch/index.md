---
category: Network
---

# useFetch

响应式 [Fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)，提供中止请求、在请求被触发之前拦截请求、在 url 更改时自动重新获取请求以及使用预定义选项创建您自己的 `useFetch`。

Reactive [Fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API) provides the ability to abort requests, intercept requests before they are fired, automatically refetch requests when the url changes, and create your own `useFetch` with predefined options. 

<CourseLink href="https://vueschool.io/lessons/vueuse-utilities-usefetch-and-reactify?friend=vueuse">Learn useFetch with this FREE video lesson from Vue School!</CourseLink>

::: 注意

与 Nuxt 3 一起使用时，**不会** 自动导入此功能以支持 Nuxt 的内置[`useFetch()`](https://v3.nuxtjs.org/api/composables/use-fetch)。如果你想使用 VueUse 中的函数，请使用显式导入。

When using with Nuxt 3, this functions will **NOT** be auto imported in favor of Nuxt's built-in [`useFetch()`](https://v3.nuxtjs.org/api/composables/use-fetch). Use explicit import if you want to use the function from VueUse.
:::

## Usage

### 基本使用(Basic Usage)

 只需提供一个 url 给 `useFetch` 函数即可使用该功能。url可以是字符串，也可以是 `ref`。 `data` 对象将包含请求的结果，`error` 对象将包含所有的错误，`isFetching` 对象表示请求是否正在加载。

The `useFetch` function can be used by simply providing a url. The url can be either a string or a `ref`. The `data` object will contain the result of the request, the `error` object will contain any errors, and the `isFetching` object will indicate if the request is loading.

```ts
import { useFetch } from '@vueuse/core'

const { isFetching, error, data } = useFetch(url)
```

### 异步使用(Asynchronous Usage)

`useFetch` 也可以像正常fetch一样被 await。请注意，只要组件是异步的，使用它的任何组件都必须将组件包装在 `<Suspense>` 标签中。您可以在[Offical Vue 3 Docs](https://vuejs.org/guide/built-ins/suspense.html)中阅读有关 suspense api 的更多信息

`useFetch` can also be awaited just like a normal fetch. Note that whenever a component is asynchronous, whatever component that uses
it must wrap the component in a `<Suspense>` tag. You can read more about the suspense api in the [Offical Vue 3 Docs](https://vuejs.org/guide/built-ins/suspense.html)

```ts
import { useFetch } from '@vueuse/core'

const { isFetching, error, data } = await useFetch(url)
```

### 更改 URL 重新获取(Refetching on URL change)

使用 `ref` 作为 url 参数，当 ref 的值更改时，`useFetch` 将自动触发另一个请求。

Using a `ref` for the url parameter will allow the `useFetch` function to automatically trigger another request when the url is changed.

```ts
const url = ref('https://my-api.com/user/1')

const { data } = useFetch(url, { refetch: true })

url.value = 'https://my-api.com/user/2' // Will trigger another request
```

### 阻止请求立即触发(Prevent request from firing immediately)

将 `immediate` 选项设置为 false 将阻止请求触发，除非调用 `execute`。

Setting the `immediate` option to false will prevent the request from firing until the `execute` function is called.

```ts
const { execute } = useFetch(url, { immediate: false })

execute()
```

### 中止请求(Aborting a request)

一个请求可以通过使用 `useFetch` 函数中的 `abort` 函数中止。`canAbort` 属性表示请求是否可以中止。

A request can be aborted by using the `abort` function from the `useFetch` function. The `canAbort` property indicates if the request can be aborted.

```ts
const { abort, canAbort } = useFetch(url)

setTimeout(() => {
  if (canAbort.value)
    abort()
}, 100)
```

也可以使用 `timeout` 属性自动中止请求。当达到给定的超时时间，它将调用 `abort` 函数。

A request can also be aborted automatically by using `timeout` property. It will call `abort` function when the given timeout is reached.

```ts
const { data } = useFetch(url, { timeout: 100 })
```

### 拦截请求(Intercepting a request)

`beforeFetch` 选项可以在发送请求之前拦截请求并修改请求选项和url。

The `beforeFetch` option can intercept a request before it is sent and modify the request options and url.

```ts
const { data } = useFetch(url, {
  async beforeFetch({ url, options, cancel }) {
    const myToken = await getMyToken()

    if (!myToken)
      cancel()

    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${myToken}`,
    }

    return {
      options,
    }
  },
})
```

`afterFetch` 选项可以在更新之前拦截响应数据。

The `afterFetch` option can intercept the response data before it is updated.

```ts
const { data } = useFetch(url, {
  afterFetch(ctx) {
    if (ctx.data.title === 'HxH')
      ctx.data.title = 'Hunter x Hunter' // Modifies the response data

    return ctx
  },
})
```

`onFetchError` 选项可以在更新之前拦截响应数据和错误。

The `onFetchError` option can intercept the response data and error before it is updated.
```ts
const { data } = useFetch(url, {
  onFetchError(ctx) {
    // ctx.data can be null when 5xx response
    if (ctx.data === null)
      ctx.data = { title: 'Hunter x Hunter' } // Modifies the response data

    ctx.error = new Error('Custom Error') // Modifies the error

    return ctx
  },
})
```

### 设置请求方法和返回类型(Setting the request method and return type)

请求方法和返回类型可以通过链式调用 `useFetch` 来设置。

The request method and return type can be set by adding the appropriate methods to the end of `useFetch`

```ts
// Request will be sent with GET method and data will be parsed as JSON
const { data } = useFetch(url).get().json()

// Request will be sent with POST method and data will be parsed as text
const { data } = useFetch(url).post().text()

// Or set the method using the options

// Request will be sent with GET method and data will be parsed as blob
const { data } = useFetch(url, { method: 'GET' }, { refetch: true }).blob()
```

### 创建自定义实例(Creating a Custom Instance)

`createFetch` 函数将返回一个 useFetch 函数，其中包含提供给它的所有预配置选项。这对于在整个应用程序中，有相同的 base URL 或需要添加请求头的API进行交互非常有用。

The `createFetch` function will return a useFetch function with whatever pre-configured options that are provided to it. This is useful for interacting with API's throughout an application that uses the same base URL or needs Authorization headers.

```ts
const useMyFetch = createFetch({
  baseUrl: 'https://my-api.com',
  options: {
    async beforeFetch({ options }) {
      const myToken = await getMyToken()
      options.headers.Authorization = `Bearer ${myToken}`

      return { options }
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
})

const { isFetching, error, data } = useMyFetch('users')
```

如果你想控制`beforeFetch`, `afterFetch`, `onFetchError`在预配置实例和新生成实例之间的行为。你可以提供一个`combination` 选项来在`overwrite` 或 `chaining`之间切换。

If you want to control the behavior of `beforeFetch`, `afterFetch`, `onFetchError` between the pre-configured instance and newly spawned instance. You can provide a `combination` option to toggle between `overwrite` or `chaining`.

```ts
const useMyFetch = createFetch({
  baseUrl: 'https://my-api.com',
  combination: 'overwrite',
  options: {
    // beforeFetch in pre-configured instance will only run when the newly spawned instance do not pass beforeFetch
    async beforeFetch({ options }) {
      const myToken = await getMyToken()
      options.headers.Authorization = `Bearer ${myToken}`

      return { options }
    },
  },
})

// use useMyFetch beforeFetch
const { isFetching, error, data } = useMyFetch('users')

// use custom beforeFetch
const { isFetching, error, data } = useMyFetch('users', {
  async beforeFetch({ url, options, cancel }) {
    const myToken = await getMyToken()

    if (!myToken)
      cancel()

    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${myToken}`,
    }

    return {
      options,
    }
  },
})
```

### 事件(Events)

将分别在收到响应和错误时触发 `onFetchResponse` 和`onFetchError`。

The `onFetchResponse` and `onFetchError` will fire on fetch request responses and errors respectively.

```ts
const { onFetchResponse, onFetchError } = useFetch(url)

onFetchResponse((response) => {
  console.log(response.status)
})

onFetchError((error) => {
  console.error(error.message)
})
```
