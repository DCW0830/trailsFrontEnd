export default (
  state = {
    currentUser: {},
    userTrails: [],
    userTrailsString: '',
    loading: false,
    error: false
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

    default:
    return state;
  }
}
