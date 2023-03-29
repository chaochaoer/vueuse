---
category: Watch
---

# watchArray

监听数组的添加和删除

Watch for an array with additions and removals.

## Usage

与 `watch` 类似，但给回调函数传入了添加和删除的元素，如果list用`push`, `splice`等更新，请传`{ deep: true }`。

Similar to `watch`, but provides the added and removed elements to the callback function. Pass `{ deep: true }` if the list is updated in place with `push`, `splice`, etc.

```ts
import { watchArray } from '@vueuse/core'

const list = ref([1, 2, 3])

watchArray(list, (newList, oldList, added, removed) => {

  console.log(newList) // [1, 2, 3, 4]
  console.log(oldList) // [1, 2, 3]
  console.log(added) // [4]
  console.log(removed) // []
})

onMounted(() => {
  list.value = [...list.value, 4]
})
```
