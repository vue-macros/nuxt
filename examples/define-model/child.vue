<script setup lang="ts">
const { msg } = defineModel<{
  msg: string
}>()
</script>

<template>
  <span>{{ msg }}</span>
  <div>
    <input type="text" v-model="msg" />
  </div>
</template>
