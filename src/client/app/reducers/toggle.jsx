const controls = (state = 'checkout', action) => {
  switch (action.type) {
    case 'TOGGLE_RADIO':
      return action.option;
    default:
      return state;
  }
};

export default controls;
