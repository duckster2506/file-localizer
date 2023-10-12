<template>
  <q-expansion-item
    icon="fa-solid fa-code"
    style="border-radius: 8px"
    expand-icon-class="text-white"
    :label="$t('field.format')"
    header-class="bg-primary text-white tw-border-solid tw-border-2"
    class="tw-border-solid tw-border-2 tw-max-w-[896px] tw-mt-2"
  >
    <slot/>
  </q-expansion-item>
</template>

<script setup lang="ts">

</script>
