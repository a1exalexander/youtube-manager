import { create } from 'logplease';

const logger = create('[CONFIG]');

export const isDev = process.env?.VUE_APP_MODE === 'dev';
export const isProd = process.env?.VUE_APP_MODE === 'prod';
export const isDevEnv = process.env?.NODE_ENV === 'development';
export const isProdEnv = process.env?.NODE_ENV === 'production';
export const appVersion = process.env?.VUE_APP_VERSION;
export const apiMode = process.env?.VUE_APP_API_MODE;

logger.info(`Environment : ${process.env?.NODE_ENV}`);
logger.info(`Mode        : ${process.env?.VUE_APP_MODE}`);
logger.info(`Api Mode    : ${process.env?.VUE_APP_API_MODE}`);
logger.info(`App Version : ${process.env?.VUE_APP_VERSION}`);
