<script setup lang="ts">
import { usePreferredColorScheme } from '@vueuse/core'

const colorScheme = usePreferredColorScheme()
</script>

<template>
  <note class="mb-2">
    首选主题:
  </note>
  <code>{{ colorScheme }}</code>
</template>
