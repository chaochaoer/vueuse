<script setup lang="ts">
import { ref } from 'vue'
import { isClient } from '@vueuse/shared'
import { useDraggable } from '@vueuse/core'
import { UseDraggable as Draggable } from './component'

const el = ref<HTMLElement | null>(null)
const handle = ref<HTMLElement | null>(null)

const innerWidth = isClient ? window.innerWidth : 200

const { x, y, style } = useDraggable(el, {
  initialValue: { x: innerWidth / 4.2, y: 80 },
  preventDefault: true,
})
</script>

<template>
  <div>
    <p italic op50 text-center>
      看浮动的盒子
    </p>
    <div
      ref="el"
      p="x-4 y-2"
      border="~ gray-400/30 rounded"
      shadow="~ hover:lg"
      class="fixed bg-$vp-c-bg select-none cursor-move z-24"
      style="touch-action:none;"
      :style="style"
    >
      👋 Drag me!
      <div class="text-sm opacity-50">
        我的位置 {{ Math.round(x) }}, {{ Math.round(y) }}
      </div>
    </div>

    <Draggable
      v-slot="{ x, y }"
      p="x-4 y-2"
      border="~ gray-400/30 rounded"
      shadow="~ hover:lg"
      class="fixed bg-$vp-c-bg select-none cursor-move z-24"
      :initial-value="{ x: innerWidth / 3.9, y: 150 }"
      :prevent-default="true"
      storage-key="vueuse-draggable-pos"
      storage-type="session"
    >
      无渲染组件
      <div class="text-xs opacity-50">
        位置在sessionStorage中持久化
      </div>
      <div class="text-sm opacity-50">
        {{ Math.round(x) }}, {{ Math.round(y) }}
      </div>
    </Draggable>

    <Draggable
      v-slot="{ x, y }"
      p="x-4 y-2"
      border="~ gray-400/30 rounded"
      shadow="~ hover:lg"
      class="fixed bg-$vp-c-bg select-none z-24"
      :initial-value="{ x: innerWidth / 3.6, y: 240 }"
      :prevent-default="true"
      :handle="handle"
    >
      <div ref="handle" class="cursor-move">
        👋 拖拽这里!
      </div>
      <div class="text-xs opacity-50">
        拖拽事件会被触发
      </div>
      <div class="text-sm opacity-50">
        我的位置 {{ Math.round(x) }}, {{ Math.round(y) }}
      </div>
    </Draggable>
  </div>
</template>
