export default class BdTime {
  isLeapYear = false;
  constructor(date = new Date()) {
    this.date = new Date(date);
    this.isLeapYear = this._checkLeapYear();
  }

  /**
   * 获取两个日期的天数差
   * @param dateA
   * @param dateB
   * @return {number}
   */
  static getDaysBetweenDate(dateA, dateB) {
    let date1 = new Date(dateA);
    let date2 = new Date(dateB);
    return Math.floor((date1 - date2) / (1000 * 60 * 60 * 24));
  }

  /**
   * 将日期对象格式化为需要的形式
   * @param dateLike 日期
   * @param fmt {string} 需要格式化的形式 e.g: yyyy-MM-dd hh:mm:ss S
   * @return {void|string}
   */
  static format(dateLike, fmt) {
    let date = new Date(dateLike);
    let o = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'h+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      S: date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
      }
    }
    return fmt;
  }
  // 是否为闰年
  _checkLeapYear() {
    let year = this.date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  formatDate(fmt) {
    return BdTime.format(this.date, fmt);
  }

  /**
   * 获取过去第 n 天的日期
   * @param days
   * @return {BdTime}
   */
  getLastNDay(days) {
    return new BdTime(this.date - days * 24 * 60 * 60 * 1000);
  }
  getYesterday() {
    return this.getLastNDay(1);
  }

  /**
   * 获取本年第一天
   * @return {BdTime}
   */
  getBeginOfThisYear() {
    return new BdTime([this.date.getFullYear(), 1, 1]);
  }
}
