import { CATALOG_FILTERS_EDIT } from '../store/types';

export const filterGetSet = (name, fallback = '', { type = 'text', maskGet = (v) => v, maskSet = (v) => v } = {}) => ({
  get() {
    return maskGet(this?.filter?.[name] ?? fallback);
  },
  set(value) {
    if (type === 'number' && !this.$isNumber(maskSet(value))) {
      this.$forceUpdate();
      return;
    }
    this.$store.commit(`catalog/${CATALOG_FILTERS_EDIT}`, { id: this?.id, [name]: maskSet(value) });
  },
});

export const filter = function filter() {
  return this.$store.getters?.['catalog/getFilterById'](this?.id);
};

export const getNumberValue = function getNumberValue() {
  return this?.value === 'all' ? 'all' : `${this?.custom || 0}`;
};

export const getPercentsValue = function getPercentsValue() {
  return this?.value === 'all' ? 'all' : `${this?.custom || 0}%`;
};

export const getStringValue = function getStringValue() {
  return this.value === 'all' ? 'all' : 'custom';
};

export const props = {
  id: String,
};
