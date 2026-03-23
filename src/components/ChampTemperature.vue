<script setup>
const model = defineModel()

defineProps(['label'])
</script>

<template>
  <p>
    {{ label }} : <input type="number" v-model="model" />
  </p>
</template>