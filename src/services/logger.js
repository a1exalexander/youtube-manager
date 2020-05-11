import { create } from 'logplease';
import { isDev } from '../config';

export const Logger = (name) => {
  if (isDev) {
    return create(name);
  }
  return undefined;
};
