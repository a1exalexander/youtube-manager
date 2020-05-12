import { create } from 'logplease';
import { isDev } from '../config';

export const Logger = (name) => {
  if (isDev) {
    return create(name);
  }
  return {
    debug: () => undefined,
    info: () => undefined,
    success: () => undefined,
    error: () => undefined,
    log: () => undefined,
    warn: () => undefined,
  };
};
