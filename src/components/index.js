// 负责全局自定义组件的注册
import PageTools from './PageTools'
export default {
  install(Vue) {
    // 完成组件的注册
    Vue.component('PageTools', PageTools)
  }
}
