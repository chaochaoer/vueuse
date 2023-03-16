<script setup lang="ts">
import { ref, watch } from 'vue'
import { useWindowFocus } from '@vueuse/core'

const startMessage = '💡 点击窗口外的某个地方取消窗口聚焦。'
const message = ref(startMessage)
const focused = useWindowFocus()

watch(focused, (isFocused) => {
  if (isFocused)
    message.value = startMessage
  else
    message.value = 'ℹ 窗口没有聚焦'
})
</script>

<template>
  <div>{{ message }}</div>
</template>
