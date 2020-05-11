import { isString, isObject } from './check';

export const getErrorMessage = (error) => {
  let msg = [isString(error), isObject(error)].includes(true) ? error : 'Something wrong';
  if (error instanceof Object) {
    switch (true) {
      case !!error?.response?.data?.detail:
        msg = error.response.data.detail;
        break;
      case !!error?.response?.data:
        msg = error.response.data;
        break;
      case !!error?.data:
        msg = error.data;
        break;
      case !!error?.response?.statusText:
        msg = error.response.statusText;
        break;
      case !!error?.message:
        msg = error.message;
        break;
      case !!error?.msg:
        msg = error.msg;
        break;
      default:
        break;
    }
  }
  return msg;
};
