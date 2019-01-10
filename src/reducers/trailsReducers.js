export default (
  state = {
    error: null,
    loading: false,
    geocode: [],
    trails: []
  }, action) => {

  switch (action.type) {
    case'LOADING_GEOCODE':
    return {...state, error: false, loading: true}

    case'FETCH_GEOCODE':
    return {
      ...state,
      error: false,
      loading: false,
      geocode: action.payload
    }

    case'LOADING_TRAILS':
    return {...state, error: false, loading: true}

    case 'FETCH_TRAILS':
    return {
      ...state,
      error: false,
      loading: false,
      trails: action.payload
    }

    case 'FETCH_ERROR':
    return {...state, loading: true, error: action.payload}

    default:
    return state;
  }
}
