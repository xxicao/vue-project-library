import utils from './utils/index.js'
import filters from './filters/index.js'
import directives from './directives/index.js'
import Loading from './components/loading/loading.js'
export default {
  install(Vue){
    // 组件
    Loading(Vue)
    // 指令
    directives(Vue);
    // 过滤器
    filters(Vue)
    // 工具方法
    Vue.prototype.$utils = utils;
  }
}