# 最佳实践

### 解构（Destructuring）

大部分VueUse的函数都返回一个**refs对象**，你可以使用ES6的对象解构语法 [ES6's object destructure]( https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)来获取你需要的东西。例如:

```ts
import { useMouse } from '@vueuse/core'

// "x" and "y" are refs
const { x, y } = useMouse()

console.log(x.value)

const mouse = useMouse()

console.log(mouse.x.value)
```

如果想使用对象属性的方式访问，可以使用`reactive()`。例如:

If you prefer to use them as object properties style, you can unwrap the refs by using. For example:

```ts
import { reactive } from 'vue'
import { useMouse } from '@vueuse/core'

const mouse = reactive(useMouse())

// "x"和"y"将自动展开，不需要 `.value`
// "x" and "y" will be auto unwrapped, no `.value` needed
console.log(mouse.x)
```

### 消除副作用（Side-effect Clean Up）

类似于Vue的`watch` 和 `computed`，当组件卸载时将被卸载，VueUse的函数也会自动清除副作用。

例如， `useEventListener` 将在组件卸载时调用 `removeEventListener` 。


Similar to Vue's `watch` and `computed` that will be disposed when the component is unmounted, VueUse's functions also clean up the side-effects automatically.

For example, useEventListener will call removeEventListener when the component is unmounted so you don't need to worry about it.

```ts
// 将会自动清除
// will cleanup automatically
useEventListener('mousemove', () => {})
```

所有的VueUse函数都遵循这个约定。

为了手动处理副作用，一些函数返回一个stop方法，就像 `watch` 函数一样。例如:

All VueUse functions follow this convention.

To manually dispose the side-effects, some function returns a stop handler just like the `watch` function. For example:

```ts
const stop = useEventListener('mousemove', () => {})

// ...

// 手动注销事件侦听器
// unregister the event listener manually
stop()
```

不是所有函数都会返回这个方法，更通用的解决方案是使用Vue的[`effectScope` API](https://vuejs.org/api/reactivity-advanced.html#effectscope) 

While not all function return the handler, a more general solution is to use the [`effectScope` API](https://vuejs.org/api/reactivity-advanced.html#effectscope) from Vue.

```ts
import { effectScope } from 'vue'

const scope = effectScope()

scope.run(() => {
  // ...

  useEventListener('mousemove', () => {})
  onClickOutside(el, () => {})
  watch(source, () => {})
})

// all composables called inside `scope.run` will be disposed
scope.stop()
```

关于更多effect scope 参见[this RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0041-reactivity-effect-scope.md).

You can learn more about effect scope in [this RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0041-reactivity-effect-scope.md).

### 接收响应式的参数（Passing Ref as Argument）

Vue中，我们使用 `setup()` 函数来创建数据和逻辑的“连接”。为了更好的灵活性，很多VueUse函数同样支持接收响应式的参数。

In Vue, we use the `setup()` function to construct the "connections" between the data and logics. To make it flexible, most of the VueUse function also accepts ref version of the arguments.

以 `useTitle` 为例子

Taking `useTitle` as an example:

###### 基本使用（Normal usage）

 `useTitle` 返回一个响应式标题变量。当你给ref赋新值时，它会自动更新标题。

Normally `useTitle` return a ref that reflects to the page's title. When you assign new value to the ref, it automatically updates the title.

```ts
const isDark = useDark()
const title = useTitle('Set title')

watch(isDark, () => {
  title.value = isDark.value ? '🌙 Good evening!' : '☀️ Good morning!'
})
```

###### Connection usage

如果你想让标题和暗色主题产生关联，你可以传递一个响应式数据，让他绑定到页面的标题。

If you think in "connection", you can instead passing a ref that make it bind to the page's title.

```ts
const isDark = useDark()
const title = computed(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')

useTitle(title)
```

###### Reactive Getter

自VueUse 9.0开始，我们引入了一个新的惯例，将“Reactive Getter”作为参数传递。

Since VueUse 9.0, we introduce a new convention for passing "Reactive Getter" as the argument. Which works great with reactive object and [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html#reactivity-transform).

```ts
const isDark = useDark()

useTitle(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')
```
