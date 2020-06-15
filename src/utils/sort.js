import { parse, compareAsc, compareDesc, parseISO } from 'date-fns';

export const sortByDate = (a, b, direction = 'asc', format) => {
  const forSort = (value) => (format ? parse(value, format, new Date()) : parseISO(value));
  console.log(a, b);
  if (direction === 'asc') return compareAsc(forSort(a), forSort(b));
  return compareDesc(forSort(a), forSort(b));
};

export const sortByString = (a, b, direction = 'asc') => {
  if (direction === 'asc') return String(a).localeCompare(b);
  return String(b).localeCompare(a);
};

export const sortByNumber = (a, b, direction = 'asc') => {
  if (direction === 'asc') return Number(a) - Number(b);
  return Number(b) - Number(a);
};
