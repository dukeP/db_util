/**
 * 格式化数值
 * @param number {Number | String} 需要格式化的数值
 * @param fractionDigits {Number} 保留小数的位数
 * @param withPercent { Boolean} 是否格式化为百分数形式
 * @return {string}
 */
export function numberFormat(number, withPercent = false, fractionDigits = 2) {
  if (isNaN(parseInt(number))) return '-';
  let round =
    Math.round(number * (withPercent ? 10000 : Math.pow(10, fractionDigits))) /
    (withPercent ? 100 : Math.pow(10, fractionDigits));

  if (withPercent) {
    return round.toFixed(fractionDigits) + '%';
  }
  return round
    .toFixed(fractionDigits)
    .replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}
