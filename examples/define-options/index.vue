<script setup lang="ts">
defineOptions({
  name: 'DefineOptionsApp',
})

const vm = getCurrentInstance()!
const compName = vm.type.name
</script>

<template>
  <p>
    defineOptions: <b>{{ compName }}</b>
  </p>
</template>
