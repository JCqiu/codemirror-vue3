//     line: true,
//     lineNumbers: true,
//     lineWrapping: false,
//     autoCloseBrackets: true,
//     matchBrackets: true,
export default {
    "x-vue": {
        tabSize: 4,
        foldGutter: true,
        styleActiveLine: true,
        keyMap: "sublime",
        extraKeys: {
            'F11'(cm) {
                cm.setOption("fullScreen", !cm.getOption("fullScreen"))
            },
            'Esc'(cm) {
                if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false)
            }
        }
    },
    "javascript": {
        tabSize: 4,
        styleActiveLine: false,
        styleSelectedText: false,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
        mode: 'text/javascript',
        hintOptions: {
            completeSingle: false
        },
        keyMap: "sublime",
        showCursorWhenSelecting: true,
        theme: "monokai",
        extraKeys: { "Ctrl": "autocomplete" }
    },
    "css": {
        tabSize: 4,
        styleActiveLine: true,
    },
    "html": {
        tabSize: 4,
        styleActiveLine: true,
    },
    "x-httpd-php": {
        tabSize: 4,
        styleActiveLine: true,
        lineWrapping: true,
    },
    "x-python": {
        tabSize: 4,
        styleActiveLine: true,
        keyMap: "emacs"
    },
    "apl": {
        tabSize: 4,
        styleActiveLine: true,
    },
    "x-swift": {
        tabSize: 4,
        styleActiveLine: true,
    },
    "x-go": {
        tabSize: 4,
        styleActiveLine: true,
    },
    "text/x-lua": {
        tabSize: 4,
        styleActiveLine: true,
    },
    "x-sql": {
        tabSize: 4,
        styleActiveLine: true,
    },
    "x-markdown": {
        tabSize: 4,
        styleActiveLine: true,
    }
}