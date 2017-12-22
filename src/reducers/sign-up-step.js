export const signUpStep = (state = 1, action) => {
  switch (action.type) {
    case 'NEXT_STEP':
      return state + 1;
    case 'PREV_STEP':
      return state - 1;
    default:
      return state;
  }
}
