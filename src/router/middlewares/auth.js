import { Logger, storage } from '../../services';
import { routeName } from '../routes';

const logger = Logger('authMiddleware');

export const authMiddleware = (to, from, next) => {
  const token = storage.getToken();
  logger.debug({ name: to.name, path: to.path, token });
  if (!!token && to?.name === 'Auth') {
    next({ name: routeName.home });
  } else if (!token && from?.name === 'Auth') {
    next(false);
  } else if (!token && to?.name !== 'Auth') {
    next({ name: routeName.auth });
  } else {
    next();
  }
};
