import { apiMode } from '../../config';

const baseUrls = {
  fake: 'https://media-scout-fake-server.herokuapp.com/api',
  prod: 'https://mediascout.co/api',
  dev: 'https://mediascout.co/api',
};

export const BASE_URL = baseUrls[apiMode];

export const url = {
  login: `${BASE_URL}/login`,
  profile: `${BASE_URL}/profile`,
  catalog: `${BASE_URL}/catalog`,
};
