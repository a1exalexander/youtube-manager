import { computed, reactive, ref } from '@vue/composition-api';
import messages from './messages';
import regex from './regex';

export const useValidation = ({ required = [] }) => {
  const isRequired = (name) => !!required.find((key) => key === name);

  const email = ref('');
  const password = ref('');

  const blur = reactive({
    email: false,
    password: false,
  });

  const vBlur = {
    email: () => {
      blur.email = true;
    },
    password: () => {
      blur.password = true;
    },
  };

  const isValid = reactive({
    email: computed(() => {
      if (!blur.email) return true;
      const valid = regex.email(email.value);
      if (isRequired('email')) {
        return !!email.value.trim() && valid;
      }
      return valid;
    }),
    password: computed(() => {
      if (!blur.password) return true;
      const valid = regex.password(password.value);
      if (isRequired('password')) {
        return !!password.value.trim() && valid;
      }
      return valid;
    }),
  });
  const vErrors = reactive({
    email: computed(() => {
      if (!blur.email) return '';
      switch (true) {
        case isRequired('email') && !email.value:
          return messages.email.required;
        case !isValid.email:
          return messages.email.valid;
        default:
          return '';
      }
    }),
    password: computed(() => {
      if (!blur.password) return '';
      switch (true) {
        case isRequired('password') && !password.value:
          return messages.password.required;
        case !regex.lowerCase(password.value):
          return messages.password.lowerCase;
        case !regex.upperCase(password.value):
          return messages.password.upperCase;
        case !regex.oneNumber(password.value):
          return messages.password.oneNumber;
        case !regex.specialChars(password.value):
          return messages.password.specialChars;
        case !regex.minAmount(password.value, 6):
          return messages.password.minAmount;
        case !isValid.password:
          return messages.password.valid;
        default:
          return '';
      }
    }),
  });
  return {
    isValid,
    vErrors,
    email,
    password,
    vBlur,
  };
};

export default useValidation;
