const common = {
  required: 'This field is required',
  valid: 'This field is value',
  match: 'This value does\'t match',
};

const email = {
  required: 'Email is required',
  valid: 'Please, enter a valid email',
};

const password = {
  required: 'Password required',
  valid: 'Please, enter a valid password',
  lowerCase: 'Please, enter a lowercase character',
  upperCase: 'Please, enter a uppercase character',
  specialChars: 'Please, enter a special character',
  oneNumber: 'Please, enter a number character',
  minAmount: 'Please, enter a minimum of 6 characters',
  match: 'Password does\'t match',
};

export default { email, password, common };
