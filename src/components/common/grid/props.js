export const props = (direction = 'row') => ({
  jc: {
    type: String,
    default: 'flex-start',
  },
  ai: {
    type: String,
    default: 'stretch',
  },
  ac: {
    type: String,
    default: 'stretch',
  },
  direction: {
    type: String,
    default: direction,
  },
  wrap: {
    type: Boolean,
    default: false,
  },
});

export default props;
