export default (
  state = {
    error: null,
    loading: true,
    location: {},
    latLon: {},
    trails: [],
    trailNumber: ''
  }, action) => {
  switch (action.type) {

    case'LOADING_GEOCODE':
    return {...state, error: false, loading: true}

    case'FETCH_GEOCODE':
    let base = action.payload.results[0].address_components
    let baseLatLon = action.payload.results[0].geometry.location

    return {...state, error: false, loading: true, latLon: baseLatLon,
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
      trails: action.payload,
      trailNumber: action.payload.trails[0].id
    }

    case 'FETCH_ERROR':
    return {...state, loading: false, error: action.payload}

    case 'CLEAR_STATE' :
    return {
      fetchedUserTrails: [],
      error: null,
      loading: false,
      location: {},
      latLon: {},
      trails: []
    }

    case 'TRAIL_MAP':
    return{...state, loading: false, trailNumber: action.payload}

    case 'TRAIL_SORT':

    state.trails.trails.sort(function(a, b){
      let aToBeSorted
      let bToBeSorted

      if(action.payload.header ==='Name') {
        aToBeSorted = a.name
        bToBeSorted = b.name
      } else if(action.payload.header ==='Difficulty') {
        aToBeSorted = a.difficulty
        bToBeSorted = b.difficulty
      } else if(action.payload.header ==='Length') {
        aToBeSorted = a.length
        bToBeSorted = b.length
      } else if(action.payload.header ==='Location') {
        aToBeSorted = a.location
        bToBeSorted = b.location
      }

      if(action.payload.click) {
        if(aToBeSorted < bToBeSorted) { return -1; }
        if(aToBeSorted > bToBeSorted) { return 1; }
        return 0;
      }else{
        if(aToBeSorted > bToBeSorted) { return -1; }
        if(aToBeSorted < bToBeSorted) { return 1; }
        return 0;
      }
    })
    return state

    default:
    return state;
  }
}
