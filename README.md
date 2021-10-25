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
### Methods
#### filters
- 时间格式化：dateFormat('yyyy-MM-dd hh:mm:ss')  

```
{{ 1634980348 | dateFormat('yyyy-MM-dd hh:mm:ss')}} // 2021-10-23 17:12:28
```

#### directives
- 输入框聚焦：v-focus  

```
<input type="text" v-focus>
```

#### components
- 全屏加载组件：loading
```
this.$loading.show();
this.$loading.show({text: '加载中', bgColor:'#42b983'});
this.$loading.hide();
```

#### utils
- 转义重点字符：filterXSS
```
const str = '<sciprt123></sciprt123>'
const result = this.$utils.filterXSS(str); // &#x3c;sciprt123&#x3e;&#x3c;/sciprt123&#x3e;
```
