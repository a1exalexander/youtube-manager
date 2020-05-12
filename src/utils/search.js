import { isObject, isArray, isString } from './check';

export const onSearch = (source, query) => {
  if (isArray(source)) {
    return source.filter((data) => onSearch(data, query));
  }
  if (isObject(source)) {
    return Object.values(source).some((data) => onSearch(data, query));
  }
  if (isString(source)) {
    return String(source).toLowerCase().indexOf(String(query).toLowerCase()) > -1;
  }
  return source;
};
