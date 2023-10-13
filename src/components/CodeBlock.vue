<template>
  <div class="code-editor readonly wrap">
    <div class="hljs tw-rounded-xl">
      <div class="code-area">
        <pre>
          <code v-highlight :class="languageClass" style="font-size: 17px">{{ value }}</code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript"

hljs.registerLanguage("javascript", javascript)

// Props
const props = defineProps({
  value: String,
  language: String,
})

// Template ref
const code = ref(null)

// Highlight directive
const vHighlight = {
  mounted: (el: HTMLElement) => hljs.highlightBlock(el),
  updated: (el: HTMLElement) => hljs.highlightBlock(el)
}

// Language class for hljs
const languageClass = computed(() => "hljs language-" + props.language)

</script>

<style scoped>
.code-editor {
  position: relative;
}

.code-editor > div {
  width: 100%;
  height: 100%;
}

/* code-area */
.code-editor .code-area {
  position: relative;
  z-index: 0;
  text-align: left;
  overflow: hidden;
}

/* font style */
.code-editor .code-area > textarea,
.code-editor .code-area > pre > code,
.code-editor .line-nums > div {
  font-family: Consolas, Monaco, monospace;
  line-height: 1.5;
}

.code-editor .code-area > textarea:hover,
.code-editor .code-area > textarea:focus-visible {
  outline: none;
}

.code-editor .code-area > textarea {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-y: hidden;
  box-sizing: border-box;
  caret-color: rgb(127, 127, 127);
  color: transparent;
  white-space: pre;
  word-wrap: normal;
  border: 0;
  width: 100%;
  height: 100%;
  background: none;
  resize: none;
}

.code-editor .code-area > pre {
  box-sizing: border-box;
  position: relative;
  z-index: 0;
  overflow: hidden;
  font-size: 0;
  margin: 0;
}

.code-editor .code-area > pre > code {
  background: none;
  display: block;
  position: relative;
  overflow-x: visible !important;
  border-radius: 0;
  box-sizing: border-box;
  margin: 0;
}

/* wrap code */
.code-editor.wrap .code-area > textarea,
.code-editor.wrap .code-area > pre > code {
  white-space: pre-wrap;
  word-wrap: break-word;
}

/* hide-header */
.code-editor.hide-header.scroll .code-area {
  height: 100%;
}

/* scroll */
.code-editor.scroll .code-area {
  height: calc(100% - 34px);
}

.code-editor.scroll .code-area > textarea {
  overflow: auto;
}

.code-editor.scroll .code-area > pre {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
