export default (
  state = { users: [], loading: false, error: null }, action) => {

  switch (action.type) {
    case'LOADING_USERS':
    return {...state, loading: true, error: false }

    case 'FETCH_USERS':
    return {
      users: action.payload,
      loading: false,
      error: false,
    }

    case 'FETCH_ERROR':
    return {...state, loading: true, error: action.payload}

    default:
    return state;
  }
}
