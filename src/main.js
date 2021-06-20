import { createApp } from "vue";
import App from "./App.vue";

import CodeMirror from './components/index'

createApp(App).use(CodeMirror).mount("#app");
