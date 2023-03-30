---
category: Component
---

# useCurrentElement

获取当前组件的元素作为 ref。

Get the DOM element of current component as a ref.

## Usage

```ts
import { useCurrentElement } from '@vueuse/core'

const el = useCurrentElement() // ComputedRef<Element>
```

## 警告(Caveats)

这个功能使用了[底层](https://vuejs.org/api/component-instance.html#el) `$el`.

This functions uses [`$el` under the hood](https://vuejs.org/api/component-instance.html#el).

在挂载组件之前，ref 的值将是 `undefined`。

Value of the ref will be `undefined` until the component is mounted.

- 对于具有单个根元素的组件，它将指向该元素。
- For components with a single root element, it will point to that element.
- 对于以文本作为根的组件，它将指向文本节点。
- For components with text root, it will point to the text node.
- 对于具有多个根节点的组件，它将是 Vue 用来跟踪组件在 DOM 中的位置的占位符 DOM 节点。
- For components with multiple root nodes, it will be the placeholder DOM node that Vue uses to keep track of the component's position in the DOM.

建议仅将此函数用于具有**单个根元素**的组件。

It's recommend to only use this function for components with **a single root element**.
