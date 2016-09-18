const zoom = (state = 13, action) => {
  switch (action.type) {
    case 'ZOOM':
      return action.level;
    default:
      return state
  }
}

export default zoom