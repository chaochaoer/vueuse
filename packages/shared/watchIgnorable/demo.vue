<script setup lang="ts">
import { ref } from 'vue'
import { watchIgnorable } from '@vueuse/core'

const log = ref('')
const source = ref(0)

const { ignoreUpdates } = watchIgnorable(
  source,
  v => (log.value += `变成了 "${v}"\n`),
  { flush: 'sync' },
)

const clear = () => {
  source.value = 0
  log.value = ''
}
const update = () => {
  source.value++
}
const ignoredUpdate = () => {
  ignoreUpdates(() => {
    source.value++
  })
}
</script>

<template>
  <div>值: {{ source }}</div>
  <button @click="update">
    更新
  </button>
  <button class="orange" @click="ignoredUpdate">
    忽略更新
  </button>
  <button @click="clear">
    重置
  </button>

  <br>

  <note>输出</note>

  <pre>{{ log }}</pre>
</template>
