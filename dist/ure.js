
/**
 * ure
 * version: 1.0.0
 * desc: An utility library for javascript developer
 * address: https://github.com/impeiran/ure#readme
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ure = factory());
}(this, (function () { 'use strict';

  /**
   * ua信息
   */
  var ua = function ua(sign) {
    return navigator ? sign === 'i' ? navigator.userAgent.toLocaleLowerCase() : navigator.userAgent : null;
  };

  /**
   * Boolean 返回跟type的比较
   * @param {Any} target 
   * @param {String} type 
   */
  var isTypeof = function isTypeof(target, type) {
    return type === /^\[object\s(.*)\]$/.exec(Object.prototype.toString.call(target))[1].toLowerCase();
  };

  /**
   * string 返回type
   * @param {Any} target 
   */
  var getType = function getType(target) {
    return /^\[object\s(.*)\]$/.exec(Object.prototype.toString.call(target))[1].toLowerCase();
  };

  /**
   * 判空
   * @param {Any} target 
   */
  var isEmpty = function isEmpty(target) {
    return [Object, Array].includes((target || {}).constructor) && !Object.entries(target || {}).length;
  };

  /**
   * 根据路径获取对象中的值
   * @param {Object} target
   * @param {String} path 
   * @param {Any} defaultValue 
   */
  var getValue = function getValue(target, path, defaultValue) {
    if (target === null || target === undefined) return defaultValue;
    var pathList = String.prototype.split.call(path, /[,[\].]+?/).filter(Boolean);
    var result = target;
    var index = 0;

    while (result !== null && result !== undefined && index < pathList.length) {
      result = result[pathList[index]];
      index++;
    }

    return result || defaultValue;
  };

  /**
   * 
   * @param {Number} min 下限
   * @param {Number} max 上限
   * @param {Boolean} floor 向下取整
   */
  var random = function random() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var floor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var result = Math.random() * (max - min) + min;
    return floor ? Math.floor(result) : result;
  };

  /**
   * 生成随机hash颜色值
   */
  var randomColor = function randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
  };

  var KEY_SIGN_LIST = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  /**
   * 随机生成key值
   * @param {Number} len 长度
   */

  var randomKey = function randomKey() {
    var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
    var result = '';

    for (var i = 0; i < len; i++) {
      result += KEY_SIGN_LIST.charAt(Math.floor(Math.random() * (KEY_SIGN_LIST.length)));
    }

    return result;
  };

  var REG_EMAIL = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
  /**
   * 校验邮箱地址
   * @param {String} target 
   */

  var isEmail = function isEmail(target) {
    return REG_EMAIL.test(target);
  };

  var isMob = /^1[3|4|5|7|8][0-9]{9}$/;
  var isTel = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
  /**
   * 校验电话号码
   * @param {String} target 
   */

  var isPhone = function isPhone(target) {
    return isTel.test(target) || isMob.test(target);
  };

  var ure = {
    ua: ua,
    getType: getType,
    isTypeof: isTypeof,
    isEmpty: isEmpty,
    getValue: getValue,
    random: random,
    randomColor: randomColor,
    randomKey: randomKey,
    isEmail: isEmail,
    isPhone: isPhone
  };

  return ure;

})));
