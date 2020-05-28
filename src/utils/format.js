import numeral from 'numeral';
import { isNumber, isArray, isBoolean } from './check';

export const separator = function separator(number, fallback = '--') {
  if (isNumber(number)) return numeral(number).format('0,0', Math.floor);
  return fallback;
};

export const number = function number(number, fallback = '--') {
  if (isNumber(number)) return number;
  return fallback;
};

export const percentage = function percentage(number, fallback = '--') {
  if (isNumber(number)) return numeral(number).format('0.[00]%', Math.floor);
  return fallback;
};

export const currency = function currency(number, fallback = '--') {
  if (isNumber(number)) return numeral(number).format('$0,0[.]00', Math.floor);
  return fallback;
};

export const float = function float(number, fallback = '--') {
  if (isNumber(number)) return numeral(number).format('0[.]00', Math.floor);
  return fallback;
};

export const wordsFromArray = function wordsFromArray(words, fallback = '--') {
  if (isArray(words)) return words.join(', ');
  return fallback;
};

export const wordsCount = function wordsCount(number, fallback = '--') {
  if (isNumber(number)) {
    switch (Number(number)) {
      case 0:
        return number;
      case 1:
        return `${number} words`;
      default:
        return `${number} words`;
    }
  }
  return fallback;
};

export const yesNo = function yesNo(boolean, fallback = '--') {
  if (isBoolean(boolean)) return boolean ? 'yes' : 'no';
  return fallback;
};

export const dateFormat = 'dd/MM/yyyy';
