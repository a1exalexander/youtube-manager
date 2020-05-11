export const metaMiddleware = (to, from, next) => {
  document.title = to.meta.title;
  next();
};
