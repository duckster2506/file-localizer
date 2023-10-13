<template>
  <div class="tw-max-w-[896px] tw-mx-auto">
    <div class="tw-text-lg">Select file format</div>

    <ExpansionPanel>
      <q-card class="bg-back tw-max-w-[896px]">
        <q-card-section class="row">
          <div v-for="option in options" class="col-md-2 col-sm-4 col-xs-12 tw-p-2">
            <FormatCard v-model="format" :format="option"/>
          </div>
        </q-card-section>
      </q-card>
    </ExpansionPanel>

    <q-card class="shadow-0 tw-mt-3 tw-bg-transparent">
      <q-card-section horizontal>
        <FormatCard v-if="isSelected" :format="format" display/>

        <q-card-section>
          <CodeBlock :value="value" language="javascript" :theme="theme"/>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import FormatCard from "components/Main/FormatCard.vue";
import ExpansionPanel from "components/ExpansionPanel.vue";
import CodeBlock from "components/CodeBlock.vue";

import {Dark} from "quasar";
import {ref, computed} from "vue";

// Format options
const options = computed(() => ['javascript', 'java'])
// Target format
const format = ref<string>("")
// Check if format is selected
const isSelected = computed(() => format.value.length > 0)

// Code editor's theme
const theme = computed(() => Dark.isActive ? 'github-dark' : 'default')

const value = ref<string>("console.log(13)")
</script>
