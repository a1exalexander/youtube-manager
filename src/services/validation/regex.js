const regex = {
  password(password, amount = 6) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/;
    return re.test(password) && this.minAmount(password, amount);
  },
  lowerCase: (value) => {
    const re = /^(?=.*[a-z])/;
    return re.test(value);
  },
  upperCase: (value) => {
    const re = /^(?=.*[A-Z])/;
    return re.test(value);
  },
  specialChars: (value) => {
    const re = /^(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/;
    return re.test(value);
  },
  oneNumber: (value) => {
    const re = /^(?=.*[0-9])/;
    return re.test(value);
  },
  minAmount: (value, n) => String(value).trim().length >= Number(n),
  digit: (value) => {
    const re = /\d+/g;
    return re.test(value);
  },
  age: (value) => {
    const re = /^(([1-9]\d?)|(1([0-6]\d)?))$/g;
    return re.test(value) && value >= 16 && value <= 200;
  },
  phone(value) {
    const re = /^([0-9\s\-+()]+)$/g;
    return re.test(value);
  },
  email: (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    return re.test(email);
  },
  emailAt: (value) => {
    const re = /@/g;
    return re.test(value);
  },
  emailDomain: (value) => {
    const re = /@[\w-]+\.\w{2,}/g;
    return re.test(value);
  },
  name: (value) => {
    const re = /\d+/g;
    const re2 = /^\S+\S/g;
    return !re.test(value) && re2.test(value);
  },
  zip: (value) => {
    const re = /^([0-9]){5}$/g;
    return re.test(value);
  },
  link: (value) => {
    const re = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    return re.test(value);
  },
};

export default regex;
