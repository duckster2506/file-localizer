<template>
  <Button flat icon="fa-solid fa-language" :tooltip="$t('language')">
    <q-popup-proxy v-model="proxy">
      <q-list dense bordered padding class="rounded-borders">
        <q-item v-for="option in options" v-ripple
                clickable
                :active="language === option.value"
                @click="language = option.value"
        >
          <q-item-section>{{ option.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-popup-proxy>
  </Button>
</template>

<script setup lang="ts">
import Button from "components/Button.vue";

import {computed, nextTick, ref, watch} from "vue";
import {LocalStorage} from "quasar";
import {useI18n} from "vue-i18n";

// Get i18n instance
const i18n = useI18n()
// Available languages
const options = computed(() => [
  {label: 'English', value: 'en'},
  {label: 'Tiếng Việt', value: 'vi'},
])

// Proxy panel
const proxy = ref<boolean>(false)

// Language
const language = ref<string>(LocalStorage.getItem('language') ?? 'en')
// Detect language changes
watch(language, value => {
  console.warn(value)
  // Save to LocalStorage
  LocalStorage.set('language', value)
  // Set i18n locale
  i18n.locale.value = value
  // Close proxy
  nextTick(() => proxy.value = false)
})


</script>
