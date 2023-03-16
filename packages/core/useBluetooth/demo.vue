<script setup lang="ts">
import { useBluetooth } from '.'

const {
  isConnected,
  isSupported,
  device,
  requestDevice,
  error,
} = useBluetooth({
  acceptAllDevices: true,
})
</script>

<template>
  <div class="grid grid-cols-1 gap-x-4 gap-y-4">
    <div>{{ isSupported ? '请求蓝牙设备' : '你的浏览器不支持蓝牙' }}</div>

    <div v-if="isSupported">
      <button @click="requestDevice()">
        请求蓝牙设备
      </button>
    </div>

    <div v-if="device">
      <p>Device Name: {{ device.name }}</p>
    </div>

    <div v-if="isConnected" class="bg-green-500 text-white p-3 rounded-md">
      <p>已连接</p>
    </div>

    <div v-if="!isConnected" class="bg-orange-800 text-white p-3 rounded-md">
      <p>未连接</p>
    </div>

    <div v-if="error">
      <div>Errors:</div>
      <pre>
          <code class="block p-5 whitespace-pre">{{ error }}</code>
        </pre>
    </div>
  </div>
</template>
