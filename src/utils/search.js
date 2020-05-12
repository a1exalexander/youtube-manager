import { isObject, isString } from './check';

export const onSearch = (query) => (source) => {
  if (isObject(source)) {
    return Object.values(source).some((data) => onSearch(query)(data));
  }
  if (isString(source)) {
    return String(source).toLowerCase().indexOf(String(query).toLowerCase()) > -1;
  }
  return !!source;
};
