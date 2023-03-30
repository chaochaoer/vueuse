---
category: Browser
---

# useWebWorkerFn

使用 Promise 语法，在不阻塞 UI 的情况下运行复杂功能，运行在 [alewin/useWorker](https://github.com/alewin/useWorker)。

Run expensive functions without blocking the UI, using a simple syntax that makes use of Promise. A port of [alewin/useWorker](https://github.com/alewin/useWorker).

## Usage

### 基本用法(Basic example)

```js
import { useWebWorkerFn } from '@vueuse/core'

const { workerFn } = useWebWorkerFn(() => {
  // 在 web worker 中做一些大工作量事情
  // some heavy works to do in web worker
})
```

### 依赖(With dependencies)

```ts {7-9}
import { useWebWorkerFn } from '@vueuse/core'

const { workerFn, workerStatus, workerTerminate } = useWebWorkerFn(
  dates => dates.sort(dateFns.compareAsc),
  {
    timeout: 50000,
    dependencies: [
      'https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.30.1/date_fns.js', // dateFns
    ],
  },
)
```

## Web Worker

在开始使用此函数之前，我们建议您阅读Web Worker文档。

Before you start using this function, we suggest you read the [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) documentation.

## Credit

这个函数是 Alessio Koci 的 Vue 的端口，在 [@Donskelle](https://github.com/Donskelle)的帮助下迁移。

This function is a Vue port of https://github.com/alewin/useWorker by Alessio Koci, with the help of [@Donskelle](https://github.com/Donskelle) to migration.
