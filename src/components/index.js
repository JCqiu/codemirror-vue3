import CodeMirror from "./CodeMirror";
const { version } = require("../../package.json");

const install = (Vue) => {
    Vue.component('CodeMirror', CodeMirror);
};

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    version,
    install,
    CodeMirror
}