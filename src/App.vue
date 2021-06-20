<template>
  <img src="./assets/logo.png" />
  <select v-model="mode">
    <option v-for="item in modeArray" :key="item" :value="item">
      {{ item }}
    </option>
  </select>
  <select v-model="theme">
    <option v-for="item in themeArray" :key="item" :value="item">
      {{ item }}
    </option>
  </select>
  <div class="box">
    <CodeMirror v-model="sql" :mode="mode" :theme="theme" />
    {{ sql }}
  </div>
</template>

<script setup>
import { ref } from "vue";
let sql = ref("");
let theme = ref("");
let mode = ref("");

let themeArray = [
  "base16-dark",
  "monokai",
  "paraiso-light",
  "ambiance",
  "cobalt",
  "base16-light",
  "paraiso-dark",
  "rubyblue",
  "mbo",
  "hopscotch",
  "solarized light",
  "lesser-dark",
];
let modeArray = [
  "text/x-vue",
  "text/javascript",
  "text/css",
  "text/html",
  "text/x-httpd-php",
  "text/x-python",
  "text/apl",
  "text/x-swift",
  "text/x-go",
  "text/x-lua",
  "text/x-sql",
  "text/x-markdown",
];
theme.value = "base16-dark";
console.log(sql.value, theme.value, mode.value, modeArray.value, themeArray);
</script>

<style lang="less">
.box {
  width: 1500px;
  height: 500px;
}
</style>
