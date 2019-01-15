export default (
  state = {
    error: null,
    loading: false,
    location: {},
    latLog: {},
    trails: []
  }, action) => {

  switch (action.type) {
    case'LOADING_GEOCODE':
    return {...state, error: false, loading: true}

    case'FETCH_GEOCODE':
    let base = action.payload.results[0].address_components
    console.log(action.payload.results)
    return {...state, error: false, loading: true,
      latLog: action.payload.results[0].geometry.location,
      location: {
        city:base[1],
        state:base[3],
        county:base[2],
        zipCode:base[0],
        country:base[4]
      }
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
