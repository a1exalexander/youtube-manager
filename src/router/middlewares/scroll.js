export const scrollMiddleware = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  }
  if (to.hash) {
    return {
      selector: to.hash,
    };
  }
  return { x: 0, y: 0 };
};
