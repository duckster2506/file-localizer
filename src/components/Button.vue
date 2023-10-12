<template>
  <q-btn
    v-bind="$attrs"

    unelevated

    :flat="flat"
    :color="color"
    :dense="!stretch"
    :icon="buttonIcon"
    :label="isUsingImage ? undefined : label"
  >
    <template v-if="isUsingImage">
      <IconMage class="d-btn-img" :src="src"/>
      <span class="tw-ml-3">{{ label }}</span>
    </template>
    <Tooltip v-if="$q.screen.gt.sm" :content="tooltip"/>
    <slot/>
  </q-btn>
</template>

<script setup lang="ts">
import IconMage from "components/IconMage.vue";
import Tooltip from "components/Tooltip.vue";

import {computed} from "vue";

const props = defineProps({
  // Image src
  src: {
    type: String,
    default: null
  },
  // Icon
  icon: {
    type: String,
    default: 'search'
  },
  // Label
  label: {
    type: String,
    default: ''
  },
  // No flat
  flat: {
    type: Boolean,
    default: false
  },
  // No dense
  stretch: {
    type: Boolean,
    default: false
  },
  // Tooltip
  tooltip: {
    type: String,
    default: null
  },
  // Color
  color: {
    type: String,
    default: 'back'
  }
})

// Check if button is using image as icon
const isUsingImage = computed(() => !!props.src)
// Get icon for button
const buttonIcon = computed(() => isUsingImage.value ? undefined : props.icon)
</script>

<style scoped lang="scss">
.d-btn-img {
  height: 28px !important;
  width: 28px !important;
}
</style>
