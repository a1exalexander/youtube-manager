export const cleanState = (state, initState) => {
  Object.keys(state).forEach((key) => {
    state[key] = initState[key];
  });
};
