export default (
  state = { currentUser: null,  error: false }, action) => {

  switch (action.type) {
    case'LOG_IN':
    return {currentUser: action.payload, error: false }

    case 'FETCH_ERROR':
    return {...state, error: action.payload}

    default:
    return state;
  }
}
