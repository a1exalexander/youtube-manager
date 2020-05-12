import { Logger, storage } from '../../services';
import { routePath } from '../routes';

const logger = Logger('[AUTH MIDDLEWARE]');

export const authMiddleware = (to, from, next) => {
  const token = storage.getToken();
  logger.debug({ name: to.name, path: to.path });
  if (!!token && to?.path === routePath.auth) {
    next(routePath.home);
  } else if (!token && from?.path === routePath.auth) {
    next(false);
  } else if (!token && to?.path !== routePath.auth) {
    next(routePath.auth);
  } else {
    next();
  }
};
