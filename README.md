# codemirror-vue3
## 周末加班弄的，文档没弄完，有空在写文档，有问题给我提issues

main.js
import CodeMirror from './components/index'

createApp(App).use(CodeMirror).mount("#app");

*.vue
```
<CodeMirror v-model="code" :mode="mode" :theme="theme" />
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
