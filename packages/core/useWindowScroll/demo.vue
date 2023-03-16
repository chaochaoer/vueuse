<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { x, y } = useWindowScroll()
</script>

<template>
  <div>
    <div>
      查看屏幕右下角的滚动值。
      <br>
      See scroll values in the lower right corner of the screen.
    </div>
    <div class="scroller" />
    <div class="float">
      <note class="mb-2">
        滚动值
      </note>
      x: {{ x }}<br>
      y: {{ y }}
    </div>
  </div>
</template>

<style scoped>
.scroller {
  position: absolute;
  top: 100%;
  left: 100%;
  width: 10000px;
  height: 10000px;
}
</style>
