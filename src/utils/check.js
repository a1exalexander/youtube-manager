export const isObject = (el) => typeof el === 'object' && !Array.isArray(el);
export const isFunction = (el) => typeof el === 'function';
export const isString = (el) => typeof el === 'string';
export const isNumber = (el) => !Number.isNaN(Number(el)) && typeof Number(el) === 'number';
export const isArray = (el) => Array.isArray(el);
export const isBoolean = (el) => typeof el === 'boolean';
export const has = (obj, key) => {
  if (!isObject(obj)) return false;
  return Object.prototype.hasOwnProperty.call(obj, key);
};
