<script setup lang="ts">
import { useScreenOrientation } from '.'

const { isSupported, orientation, angle } = useScreenOrientation()
</script>

<template>
  <note class="mb-2">
    为了获得最佳效果，请使用移动或平板设备(或使用浏览器的检查器来模拟方向变化)
  </note>
  <div>
    isSupported: <boolean-display :value="isSupported">
      {{ isSupported }}
    </boolean-display>
  </div>
  <div>Orientation Type: <b>{{ orientation }}</b></div>
  <div>Orientation Angle: <b>{{ angle }}</b></div>
</template>
