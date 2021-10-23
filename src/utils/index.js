export default {
  /**
   * 字符串转义
   * @param {String} e 需要转义的字符串
   * @returns String
   */
  filterXSS(e){
    if (!e) return e;
    for (; e !== unescape(e);) e = unescape(e);
    for (let r = ['<', '>', '\'', '"', '%3c', '%3e', '%27', '%22', '%253c', '%253e', '%2527', '%2522'], n = ['&#x3c;', '&#x3e;', '&#x27;', '&#x22;', '%26%23x3c%3B', '%26%23x3e%3B', '%26%23x27%3B', '%26%23x22%3B', '%2526%2523x3c%253B', '%2526%2523x3e%253B', '%2526%2523x27%253B', '%2526%2523x22%253B'], a = 0; a < r.length; a++) e = e.replace(new RegExp(r[a], 'gi'), n[a]);
    return e;
  },
}