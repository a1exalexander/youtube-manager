import { apiMode } from '../../config';

const baseUrls = {
  fake: 'https://media-scout-fake-server.herokuapp.com/api',
  prod: 'https://mediascout.co/api',
  dev: 'https://mediascout.co/api',
  local: 'http://localhost:9000/api',
};

export const BASE_URL = baseUrls[apiMode];

export const url = {
  login: `${BASE_URL}/login`,
  profile: `${BASE_URL}/profile`,
  videos: `${BASE_URL}/videos`,
  accounts: `${BASE_URL}/accounts`,
  charts: `${BASE_URL}/charts`,
  clips: `${BASE_URL}/clips`,
  shots: `${BASE_URL}/shots`,
  folders: `${BASE_URL}/folders`,
};
