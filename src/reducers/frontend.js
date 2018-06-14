const frontend = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDE_MENU':
      return !state
    default:
      return state
  }
}

export default frontend
