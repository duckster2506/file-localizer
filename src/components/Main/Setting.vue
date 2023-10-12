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

    <q-card class="shadow-0 tw-mt-3">
      <q-card-section horizontal>
        <FormatCard :format="format" display/>

        <q-card-section>
          <div id="editor"></div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import FormatCard from "components/Main/FormatCard.vue";
import ExpansionPanel from "components/ExpansionPanel.vue";

import {ref, computed, onMounted} from "vue";
import {monaco} from "boot/monaco";
// Format options
const options = computed(() => ['javascript', 'java'])
// Target format
const format = ref<string>("")
// Check if format is selected
const isSelected = computed(() => format.value.length > 0)

onMounted(() => {
  const el = document.getElementById("editor")
  if (el !== null) {
    console.warn(el)
    monaco.editor.create(el, {
      value: "function hello() {\n\talert('Hello world!');\n",
      language: 'javascript'
    })
  }
})
</script>
