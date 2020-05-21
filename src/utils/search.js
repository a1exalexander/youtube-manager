import { isObject, isArray } from './check';
import { Logger } from '../services/logger';

const logger = Logger('[SEARCH]');

export const onSearch = (query) => (source) => {
  try {
    if (isObject(source)) {
      return Object.values(source).some((data) => onSearch(query)(data));
    }
    if (isArray(source)) {
      return source.some((data) => onSearch(query)(data));
    }
    return (
      String(source)
        .toLowerCase()
        .indexOf(String(query).toLowerCase()) > -1
    );
  } catch (err) {
    logger.error(err);
    return true;
  }
};
