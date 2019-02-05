export default (
  state = {
    error: null,
    loading: false,
    location: JSON.parse(localStorage.getItem('location')) || {},
    latLon: JSON.parse(localStorage.getItem('latLon')) || {},
    trails: JSON.parse(localStorage.getItem('trails')) || [],
    trailNumber: localStorage.getItem('trailNumber') || null,
  }, action) => {
  switch (action.type) {

    case'FETCH_GEOCODE':
    let base = action.payload.results[0].address_components
    let baseLatLon = action.payload.results[0].geometry.location
    let searchedLocation = {
      city:base[1],
      state:base[3],
      county:base[2],
      zipCode:base[0],
      country:base[4]
    }
    localStorage.setItem('location', JSON.stringify(searchedLocation))
    localStorage.setItem('latLon', JSON.stringify(baseLatLon))
    return {...state, error: false, loading: true, latLon: baseLatLon,
    location: searchedLocation}

    case'LOADING_TRAILS':
    return {...state, error: false, loading: true}

    case 'FETCH_TRAILS':
    let convertedDiff = action.payload.trails.map(mapObj => {
      if(mapObj.difficulty === 'green') {
        return {...mapObj, difficulty: 'Easy', rank: 1}
      } else if (mapObj.difficulty ==='greenBlue') {
        return {...mapObj, difficulty: 'Moderatly Easy', rank: 2}
      } else if (mapObj.difficulty ==='blue') {
        return {...mapObj, difficulty: 'Moderate', rank: 3}
      } else if (mapObj.difficulty ==='blueBlack') {
        return {...mapObj, difficulty: 'Moderatly Hard ', rank: 4}
      } else if (mapObj.difficulty ==='black') {
        return {...mapObj, difficulty: 'Hard', rank: 5}
      } else {
        return mapObj
      }
    })
    let firstMap = action.payload.trails[0].id
    localStorage.setItem('trails', JSON.stringify(convertedDiff))
    localStorage.setItem('trailNumber', firstMap)
    return {
      ...state,
      error: false,
      loading: false,
      trails: convertedDiff,
      trailNumber: firstMap
    }

    case 'TRAIL_MAP':
    localStorage.setItem('trailNumber', action.payload)
    return{...state, loading: false, trailNumber: action.payload}

    case 'TRAIL_SORT':
    state.trails.sort(function(a, b){
      let aToBeSorted
      let bToBeSorted

      if(action.payload.header ==='Name') {
        aToBeSorted = a.name
        bToBeSorted = b.name
      } else if(action.payload.header ==='Difficulty') {
        aToBeSorted = b.rank
        bToBeSorted = a.rank
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

    case'LOADING_GEOCODE':
    return {...state, error: false, loading: true}

    case 'FETCH_ERROR':
    return {...state, trails: [], loading: false, error: action.payload}

    case 'CLEAR_STATE' :
    return {
      error: null,
      loading: false,
      location: {},
      latLon: {},
      trails: [],
      trailNumber: ''
    }

    default:
    return state;
  }
}
