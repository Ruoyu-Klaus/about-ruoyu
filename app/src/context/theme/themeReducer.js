export default (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return action.payload;
  }
};
