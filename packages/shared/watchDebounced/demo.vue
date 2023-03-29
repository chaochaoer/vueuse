<script setup lang="ts">
import { ref } from 'vue'
import { watchDebounced } from '@vueuse/core'

const input = ref('')
const updated = ref(0)

watchDebounced(input, () => {
  updated.value += 1
}, { debounce: 1000, maxWait: 5000 })
</script>

<template>
  <div>
    <input v-model="input" placeholder="Try to type anything..." type="text">
    <note>delay设置为1000ms, maxWait设置为5000ms。</note>

    <p>输入: {{ input }}</p>
    <p>更新的次数: {{ updated }}</p>
  </div>
</template>
