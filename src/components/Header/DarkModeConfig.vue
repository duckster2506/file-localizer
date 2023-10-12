<template>
  <q-toggle
    v-model="darkMode"
    checked-icon="fa-solid fa-moon"
    unchecked-icon="fa-solid fa-sun"
    color="back"
    icon-color="grey-3"
  />
</template>

<script setup lang="ts">
import {Dark, LocalStorage} from "quasar";
import {onMounted, ref, watch} from "vue";

// Dark mode flag
const darkMode = ref<boolean>(LocalStorage.getItem('dark_mode') ?? false)
// Apply dark mode when mounted
onMounted(() => Dark.set(darkMode.value))
// Watch darkMode changes
watch(darkMode, value => {
  // Save to LocalStorage
  LocalStorage.set('dark_mode', value)
  // Toggle Dark mode
  Dark.set(value)
})
</script>
