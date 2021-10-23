export default (Vue) =>{
  /**
   * 自动聚焦
   * @returns void
   */
  Vue.directive('focus', {
    inserted(el) {
      el.focus();
    },
  })
}