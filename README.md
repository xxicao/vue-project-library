### Usage
```javascript
import Vue from 'vue'
import App from './App.vue'
import library from 'vue-project-library'

Vue.use(library)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

```
### Mthods
#### filters
- dateFormat('yyyy-MM-dd hh:mm:ss')：时间格式化

#### directives
- v-focus：聚焦指令

#### components
- loading: 全屏加载组件，方法：this.$loading.show({text: 'String', bgColor:'color'}) 和 hide()

#### utils
- filterXSS(string)：文本标签转义
