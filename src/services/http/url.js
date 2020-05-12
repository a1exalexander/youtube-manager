import { apiMode } from '../../config';

const baseUrls = {
  fake: 'https://media-scout-fake-server.herokuapp.com/api',
  prod: 'https://media-scout-fake-server.herokuapp.com/api',
  dev: 'https://media-scout-fake-server.herokuapp.com/api',
};

export const BASE_URL = baseUrls[apiMode];

export const url = {
  login: `${BASE_URL}/login`,
  profile: `${BASE_URL}/profile`,
  catalog: `${BASE_URL}/catalog`,
};
