---
category: Component
---

::: info
如果您正在寻找更多功能，请使用[`vue-virtual-scroller`](https://github.com/Akryum/vue-virtual-scroller)
:::

::: info
Please consider using [`vue-virtual-scroller`](https://github.com/Akryum/vue-virtual-scroller) if you are looking for more features.
:::


# useVirtualList

轻松创建虚拟列表。虚拟列表（有时称为[*virtual scrollers*](https://akryum.github.io/vue-virtual-scroller/)）允许您高效地呈现大量的项。通过使用 `wrapper` 元素来模拟容器的完整高度，只呈现最少数量的DOM节点来显示 `container` 元素中的项。

Create virtual lists with ease. Virtual lists (sometimes called [*virtual scrollers*](https://akryum.github.io/vue-virtual-scroller/)) allow you to render a large number of items performantly. They only render the minimum number of DOM nodes necessary to show the items within the `container` element by using the `wrapper` element to emulate the container element's full height.

## Usage

### Simple list

```typescript
import { useVirtualList } from '@vueuse/core'

const { list, containerProps, wrapperProps } = useVirtualList(
  Array.from(Array(99999).keys()),
  {
    // Keep `itemHeight` in sync with the item's row.
    itemHeight: 22,
  },
)
```

### 配置(Config)

| State      | Type     | Description                                                                                     |
|------------|----------|-------------------------------------------------------------------------------------------------|
| itemHeight | `number` | 确保正确计算 `wrapper` 元素的总高度.*                 |
| itemWidth  | `number` | 确保正确计算 `wrapper` 元素的总宽度.*                  |
| overscan   | `number` | 预渲染的 DOM 节点数。如果滚动速度非常快，可以防止项之间出现空白 |

\* `itemHeight` or `itemWidth` 必须与渲染的每一行的高度保持同步。如果您在滚动到列表底部时看到额外的空白或抖动，请确保 `itemHeight` 或者 `itemWidth` 与行的高度相同。

\* The `itemHeight` or `itemWidth` must be kept in sync with the height of each row rendered. If you are seeing extra whitespace or jitter when scrolling to the bottom of the list, ensure the `itemHeight` or `itemWidth` is the same height as the row.

### Reactive list

```typescript
import { useVirtualList, useToggle } from '@vueuse/core'
import { computed } from 'vue'

const [isEven, toggle] = useToggle()
const allItems = Array.from(Array(99999).keys())
const filteredList = computed(() => allItems.filter(i => isEven.value ? i % 2 === 0 : i % 2 === 1))

const { list, containerProps, wrapperProps } = useVirtualList(
  filteredList,
  {
    itemHeight: 22,
  },
)
```

```html
<template>
  <p>Showing {{ isEven ? 'even' : 'odd' }} items</p>
  <button @click="toggle">Toggle Even/Odd</button>
  <div v-bind="containerProps" style="height: 300px">
    <div v-bind="wrapperProps">
      <div v-for="item in list" :key="item.index" style="height: 22px">
        Row: {{ item.data }}
      </div>
    </div>
  </div>
</template>
```

### Horizontal list

```typescript
import { useVirtualList } from '@vueuse/core'

const allItems = Array.from(Array(99999).keys())

const { list, containerProps, wrapperProps } = useVirtualList(
  allItems,
  {
    itemWidth: 200,
  },
)
```

```html
<template>
  <div v-bind="containerProps" style="height: 300px">
    <div v-bind="wrapperProps">
      <div v-for="item in list" :key="item.index" style="width: 200px">
        Row: {{ item.data }}
      </div>
    </div>
  </div>
</template>
```

## Component Usage

```html
<UseVirtualList :list="list" :options="options" height="300px">
  <template #="props">
    <!-- you can get current item of list here -->
    <div style="height: 22px">Row {{ props.data }}</div>
  </template>
</UseVirtualList>
```

要滚动到指定元素，可以使用组件暴露的 `scrollTo(index: number) => void`

To scroll to a specific element, the component exposes `scrollTo(index: number) => void`.
