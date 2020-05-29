export const getStatus = (error) => error?.response?.status;

export const qs = (name, url = window.location.href) => {
  const replacedName = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${replacedName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
