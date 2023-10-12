<template>
  <q-card class="shadow-0 tw-flex tw-tw-max-h-[128x] tw-bg-transparent">
    <q-space/>

    <q-card-section :class="wrapperClasses" @click="emits('update:modelValue', format)">
      <img class="!tw-rounded-md !tw-w-[100px] !tw-h-[100px] tw-mx-auto"
           :alt="$t(`field.${format}`)" :src="`/images/${format}.png`">
      <q-card-section class="tw-p-0 tw-mt-1">
        <div class="tw-text-lg tw-font-bold tw-text-center">{{ $t(`field.${format}`) }}</div>
      </q-card-section>
    </q-card-section>

    <q-space/>
  </q-card>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  modelValue: String,
  format: String,
  display: Boolean
})
const emits = defineEmits(['update:modelValue'])

// Check if this Card is active
const isActive = computed(() => !props.display && props.modelValue === props.format)
// Wrapper card's classes
const wrapperClasses = computed(() => ({
  'tw-p-1': true,
  '!tw-border-2': !props.display,
  '!tw-rounded-md': !props.display,
  'hover:tw-border-sky-400': !props.display,
  'hover:!tw-border-solid': !props.display,
  '!tw-border-solid': isActive.value,
  '!tw-border-sky-500': isActive.value,
  'tw-border-transparent': !props.display,
  'tw-border-solid': !props.display && !isActive.value,
  'tw-bg-sky-500/20': isActive.value,
  'tw-cursor-pointer': !props.display,
}))
</script>
