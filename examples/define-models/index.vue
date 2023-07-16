<script setup lang="ts">
import Child from './child.vue'

const msg = ref('msg')
</script>

<template>
  <b>defineModels: </b>
  <Child v-model:msg="msg" />
</template>
