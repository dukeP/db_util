/**
 * 验证图片尺寸
 * @param imgUrl 图片地址
 * @param option
 * @param option.width {Number} 图片宽
 * @param option.height {Number} 图片高
 * @param [option.deviation] {Number} 误差忽略范围
 * @param [option.range] {Object | null}
 * @param option.range.width {Object} 图片宽度范围
 * @param option.range.width.max {Number} 图片宽度范围
 * @param option.range.width.min {Number} 图片宽度范围
 * @param option.range.height {Object} 图片高度范围
 * @param option.range.height.max {Number} 图片高度范围
 * @param option.range.height.min {Number} 图片高度范围
 */
export function validateImage(
  imgUrl,
  option = {
    width: 0,
    height: 0,
    deviation: 0,
    range: null
  }
) {
  function checkSize(imgWidth, imgHeight) {
    // 验证图片尺寸在某一范围
    if (option.range) {
      let widthRight =
        imgWidth >= option.range.width.min &&
        imgWidth <= option.range.width.min;
      let heightRight =
        imgHeight >= option.range.height.min &&
        imgWidth <= option.range.height.min;
      return widthRight && heightRight;
    }

    // 验证图片尺寸
    let widthRight =
      Math.abs(imgWidth - option.width) <= (option.deviation || 0);
    let heightRight =
      Math.abs(imgHeight - option.height) <= (option.deviation || 0);

    return widthRight && heightRight;
  }
  return new Promise(resolve => {
    let result = {
      result: false,
      width: 0,
      height: 0
    };
    // eslint-disable-next-line no-undef
    let img = new Image();
    // onLoad 是异步事件，在 resolve 返回结果
    img.onload = function() {
      result.width = img.width;
      result.height = img.height;
      result.result = checkSize(img.width, img.height);
      resolve(result);
    };

    img.onerror = function() {
      resolve(result);
    };
    img.src = imgUrl;
    img = null;
  });
}
