<template>
  <q-page class="bg-back tw-px-[100px]">
    <div class="text-primary tw-font-bold tw-text-5xl tw-pt-[30px] tw-text-center">{{ $t('message.intro') }}</div>
    <div class="tw-text-center tw-mt-2 tw-text-lg">File localizer will translate your locale file into any language</div>

    <Setting class="tw-mt-10"/>
  </q-page>
</template>

<script setup lang="ts">
import Setting from "components/Main/Setting.vue";
</script>
