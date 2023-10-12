<template>
  <q-avatar :square="!rounded" :rounded="rounded" :size="size">
    <img :src="src" alt="">
  </q-avatar>
</template>

<script setup lang="ts">
const props = defineProps({
  // Image icon
  size: {
    type: String,
    default: '32px'
  },
  // Image source
  src: {
    type: String
  },
  // Make avatar rounded
  rounded: {
    type: Boolean,
    default: false
  },
  // Only work if it is optimizing for performance
  color: {
    type: String,
    default: 'primary'
  },
  // Force using visual (image)
  forceVisual: {
    type: Boolean
  }
})
</script>
