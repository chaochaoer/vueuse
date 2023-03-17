<script setup lang="ts">
import { useFileDialog } from '.'

const { files, open, reset } = useFileDialog()
</script>

<template>
  <button type="button" @click="open()">
    选择文件
  </button>
  <button type="button" :disabled="!files" @click="reset()">
    重置
  </button>
  <template v-if="files">
    <p>You have selected: <b>{{ files.length }} files</b></p>
    <li v-for="file of files" :key="file.name">
      {{ file.name }}
    </li>
  </template>
</template>
