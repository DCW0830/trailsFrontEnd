export default (
  state = {
    currentUser: {},
    userTrails: [],
    userTrailsString: '',
    loading: false,
    fetchedUserTrails: [],
    error: false,
    trailNumber: ''
  }, action) => {

  switch (action.type) {

    case'LOG_IN':
    let newArray = action.payload.trails.map(trail => {
      return trail.trail_number
    })
    let newUnique = [...new Set(newArray)];
    let newString = newUnique.join(',')

    return {
      ...state,
      currentUser: action.payload,
      userTrails: action.payload.trails,
      userTrailsString: newString,
      error: false,
      loading: true
    }

    case 'FETCH_ERROR':
    return {...state, loading: false, error: action.payload}

    case 'CLEAR_STATE':
    return {
      currentUser: {},
      userTrailsString: '',
      userTrails:[],
      error: false,
      loading: false
    }

    case 'ADD_USER_TRAIL':
    let newObject = [...state.userTrails,
      {
        id: action.payload.id,
        trail_number: action.payload.trail_number
      }
    ]
    let convertedArray =  newObject.map(trail => {
      return trail.trail_number
    })
    let unique = [...new Set(convertedArray)];
    let convertedString = unique.join(',')

    return {
      ...state, loading: true, error: false, userTrailsString: convertedString,
       userTrails: [
         ...state.userTrails, {
           id: action.payload.id,
           trail_number: action.payload.trail_number
         }
       ]
    }

    case 'DELETE_FAVORITE':

    let newUserTrails = state.userTrails.filter(trail => {
      return trail.trail_number !== action.payload.trail_number
    })
    let toArray =  newUserTrails.map(trail => {
      return trail.trail_number
    })
    let toUnique = [...new Set(toArray)];
    let toString = toUnique.join(',')

    return {...state, loading: true, userTrailsString: toString, userTrails: newUserTrails}

    case 'FETCH_USER_TRAILS':
    return {
      ...state,
      error: false,
      loading: false,
      fetchedUserTrails: action.payload.trails,
      trailNumber: action.payload.trails[0].id
    }

    case 'USER_TRAIL_MAP':
    return{...state, loading: false, trailNumber: action.payload}

    case 'USER_TRAIL_SORT':
    
    state.fetchedUserTrails.sort(function(a, b){
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
