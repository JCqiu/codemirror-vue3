<template>
  <a-textarea id="editor" class="code-mirror" />
</template>

<script setup>
import { onMounted, defineProps, defineEmit, watch } from "vue";

import CodeMirrorLib from "codemirror/lib/codemirror";
// base style
import "codemirror/lib/codemirror.css";
// language
import "codemirror/mode/vue/vue.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/css/css.js";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/php/php.js";
import "codemirror/mode/python/python.js";
import "codemirror/mode/apl/apl.js";
import "codemirror/mode/swift/swift.js";
import "codemirror/mode/go/go.js";
import "codemirror/mode/lua/lua.js";
import "codemirror/mode/sql/sql";
import "codemirror/mode/markdown/markdown.js";
import "codemirror/mode/htmlmixed/htmlmixed.js";
// theme css
import "codemirror/theme/base16-dark.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/paraiso-light.css";
import "codemirror/theme/ambiance.css";
import "codemirror/theme/cobalt.css";
import "codemirror/theme/base16-light.css";
import "codemirror/theme/paraiso-dark.css";
import "codemirror/theme/rubyblue.css";
import "codemirror/theme/mbo.css";
import "codemirror/theme/hopscotch.css";
import "codemirror/theme/solarized.css";
import "codemirror/theme/lesser-dark.css";
import "codemirror/addon/merge/merge.css";

import "codemirror/addon/hint/sql-hint";
import "codemirror/addon/display/placeholder";
import "codemirror/addon/merge/merge.js";

// active-line.js
import "codemirror/addon/selection/active-line.js";
// styleSelectedText
import "codemirror/addon/selection/mark-selection.js";
import "codemirror/addon/search/searchcursor.js";
// hint
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/javascript-hint.js";
import "codemirror/addon/selection/active-line.js";
// highlightSelectionMatches
import "codemirror/addon/scroll/annotatescrollbar.js";
import "codemirror/addon/search/matchesonscrollbar.js";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/match-highlighter.js";
// keyMap
import "codemirror/mode/clike/clike.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/comment/comment.js";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/search.js";
import "codemirror/keymap/sublime.js";
// keyMap
import "codemirror/keymap/emacs.js";
// foldGutter
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/xml-fold.js";
// autoCloseTags
import "codemirror/addon/edit/closetag.js";
// closebrackets
import "codemirror/addon/edit/closebrackets.js";

import modeOption from "./modeOption";

const CodeMirror = window.CodeMirror || CodeMirrorLib;

const props = defineProps({
  mode: {
    default: "text/x-sql",
    type: String,
    validator: (value) => {
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
      if (!modeArray.includes(value)) throw new Error("暂无该语法支持");
      return true;
    },
  },
  theme: {
    default: "base16-dark",
    type: String,
    validator: (value) => {
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
      if (!themeArray.includes(value)) throw new Error("暂无该样式");
      return true;
    },
  },
  options: Object,
  modelValue: String,
  table: Array,
});
const emit = defineEmit();

let editor = document.getElementById("editor");
let codeEditor = null;

const createMirror = () => {
  codeEditor = CodeMirror.fromTextArea(editor, {
    mode: props.mode,
    theme: props.theme,
    line: true,
    lineNumbers: true,
    lineWrapping: false,
    autoCloseBrackets: true,
    matchBrackets: true,
    ...modeOption[props.mode.split("/")[1]],
    ...props.options,
  });
  //赋值 SELECT * FROM s as a WHERE a.i
  codeEditor.setValue(props.modelValue);

  codeEditor.on("change", (code, change) => {
    //获取值
    emit("update:modelValue", code.getValue());
    if (
      change.origin === "+input" &&
      change.text[0] !== ";" &&
      change.text[0].trim() !== "" &&
      change.text[1] !== ""
    ) {
      codeEditor.showHint({
        completeSingle: false,
      });
    }
  });
};

onMounted(() => {
  editor = document.getElementById("editor");
  editor.value = "";
  createMirror();
});

watch(
  props,
  (val) => {
    codeEditor.setOption("theme", val.theme);
    codeEditor.setOption("mode", val.mode);
  },
  { deep: true }
);
</script>

<style lang="less">
.code-mirror {
  width: 100%;
  height: 100%;
}
</style>