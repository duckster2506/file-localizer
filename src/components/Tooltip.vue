<template>
  <q-tooltip v-if="content && content !== ''" transition-show="scale" transition-hide="scale" class="tw-text-sm">
    <slot>
      {{ content }}
    </slot>
  </q-tooltip>
</template>

<script setup lang="ts">
const props = defineProps({
  content: String
})
</script>
