/**
 * 判断是否图片
 * @param {String} target 
 */
const isImage = (target) => {
  return /\.(jpeg|jpg|png|bmp|gif｜wbmp|svg)$/i.test(target);
};

export default isImage;