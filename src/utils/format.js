import numeral from 'numeral';
import { isNumber } from './check';

export const separator = function separator(number, fallback = '--') {
  if (isNumber(number)) return numeral(number).format('0,0', Math.floor);
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
