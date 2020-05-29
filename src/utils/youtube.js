import { qs } from './http';

export const getVideoId = (link) => {
  try {
    const idFromQuery = qs('v', link);
    if (idFromQuery) {
      return idFromQuery;
    }
    const queries = link.split('/');
    const idFromUrl = queries[queries.length - 1];
    return idFromUrl;
  } catch {
    return null;
  }
};
