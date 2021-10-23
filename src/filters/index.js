export default (Vue) => {
  /**
   * 时间格式化
   * @param {*} format 格式化模板
   * @returns String
   */
  Vue.filter('dateFormat', (value, format = 'yyyy-MM-dd hh:mm:ss') => {
    if (!value) {
      return value;
    }
    const dt = new Date(Number(value) * 1000);
    const year = dt.getFullYear();
    const month = (`${dt.getMonth() + 1}`).padStart(2, '0');
    const date = (`${dt.getDate()}`).padStart(2, '0');
    const hh = (`${dt.getHours()}`).padStart(2, '0');
    const mm = (`${dt.getMinutes()}`).padStart(2, '0');
    const ss = (`${dt.getSeconds()}`).padStart(2, '0');
    let result = format;
    result = result.replace('yyyy', year)
            .replace('MM', month)
            .replace('dd', date)
            .replace('hh', hh)
            .replace('mm', mm)
            .replace('ss', ss);
    return result;
  })
}
