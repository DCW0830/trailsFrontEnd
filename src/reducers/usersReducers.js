export default (
  state = { currentUser: {}, userTrails: [], error: false }, action) => {

  switch (action.type) {

    case'LOG_IN':
    console.log(action.payload)
    return {
      currentUser: action.payload,
      userTrails: action.payload.trails,
      error: false
    }

    case 'FETCH_ERROR':
    return {...state, error: action.payload}

    case 'CLEAR_STATE':
    return {currentUser: {}, userTrails:[], error: false}

    case 'ADD_USER_TRAIL':


    return {
      ...state, error: false,
       userTrails: [
         ...state.userTrails, {
           id: action.payload.id,
           trail_number: action.payload.trail_number
         }
       ]
     }

     case 'DELETE_FAVORITE':
     console.log(action.payload)
     let newUserTrails = state.userTrails.filter(trail => {
       return trail.trail_number !== action.payload.trail_number
     })
     return {...state, userTrails: newUserTrails}

    default:
    return state;
  }
}
