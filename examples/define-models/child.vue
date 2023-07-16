<script setup lang="ts">
const { msg } = defineModels<{
  msg: string
}>()
</script>

<template>
  <span>{{ msg }}</span>
  <div>
    <input type="text" v-model="msg" />
  </div>
</template>
