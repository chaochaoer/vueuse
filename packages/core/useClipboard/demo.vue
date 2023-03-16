<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard, usePermission } from '@vueuse/core'

const input = ref('')

const { text, isSupported, copy } = useClipboard()
const permissionRead = usePermission('clipboard-read')
const permissionWrite = usePermission('clipboard-write')
</script>

<template>
  <div v-if="isSupported">
    <note>
      剪贴板权限: 读 <b>{{ permissionRead }}</b> | 写
      <b>{{ permissionWrite }}</b>
    </note>
    <p>
      当前已复制: <code>{{ text || 'none' }}</code>
    </p>
    <input v-model="input" type="text">
    <button @click="copy(input)">
      复制
    </button>
  </div>
  <p v-else>
    您的浏览器不支持Clipboard API
  </p>
</template>
