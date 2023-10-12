<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="bg-back text-back" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="tw-font-bold">
          <IconMage src="/images/translation.png"/>
          File localizer
        </q-toolbar-title>

        <q-space/>
        <Button flat icon="fa-brands fa-github" tooltip="GitHub" @click="toGitHub"/>
        <q-separator vertical inset class="tw-ml-3"/>
        <LanguageConfig class="tw-ml-3"/>
        <DarkModeConfig class="tw-ml-3"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import Button from "components/Button.vue";
import IconMage from "components/IconMage.vue";
import LanguageConfig from "components/Header/LanguageConfig.vue";
import DarkModeConfig from "components/Header/DarkModeConfig.vue";

// Redirect to project GitHub's page
const toGitHub = () => window.location.replace("https://github.com/duckster2506/file-localizer")
</script>
