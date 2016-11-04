const map = (state = {
  zoom: 13,
}, action) => {
  switch (action.type) {
    case 'ZOOM':
      return { ...state, zoom: action.level };
    default:
      return state;
  }
};

export default map;
