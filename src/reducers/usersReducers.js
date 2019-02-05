// let mapStart = () => {
//   if(localStorage['userTrails']) {
//    let newArray = JSON.parse(localStorage.getItem('userTrails'))
//    return newArray[0].id
//   } else {
//    return ''
//   }
// }

export default (
  state = {
    trailNumber: null,
    currentUser: localStorage.getItem('username') || '',
    fetchedUserTrails: JSON.parse(localStorage.getItem('fetchedUserTrails')) || [],
    userTrails: JSON.parse(localStorage.getItem('userTrails')) || [],
    error: false,
    loading: false
  }, action) => {

  switch (action.type) {
    case'LOG_IN':
    return {
      ...state,
      currentUser: action.payload.username,
      userTrails: action.payload.trails,
      error: false,
      loading: true
    }

    case 'FETCH_USER_TRAILS':
    let userConvertedDiff = action.payload.trails.map(mapObj => {
      if(mapObj.difficulty === 'green') {
        return {...mapObj, difficulty: 'Easy', rank: 1}
      } else if (mapObj.difficulty ==='greenBlue') {
        return {...mapObj, difficulty: 'Moderatly Easy', rank: 2}
      } else if (mapObj.difficulty ==='blue') {
        return {...mapObj, difficulty: 'Moderate', rank: 3}
      } else if (mapObj.difficulty ==='blueBlack') {
        return {...mapObj, difficulty: 'Moderately Hard ', rank: 4}
      } else if (mapObj.difficulty ==='black') {
        return {...mapObj, difficulty: 'Hard', rank: 5}
      } else {
        return mapObj
      }
    })
    localStorage.setItem('fetchedUserTrails', JSON.stringify(userConvertedDiff))
    // map local storage goes here
    return {
      ...state,
      error: false,
      loading: false,
      fetchedUserTrails: userConvertedDiff,
      trailNumber: action.payload.trails[0].id
    }

    case 'ADD_USER_TRAIL':
    let addedTrail = [...state.userTrails,
    {id: action.payload.id, trail_number: action.payload.trail_number}]
    localStorage.setItem('userTrails', JSON.stringify(addedTrail))
    return {...state, userTrails: addedTrail}

    case 'ADD_FETCHED_TRAIL':
    let newTrailConvertedDiff = action.payload.trails.map(mapObj => {
      if(mapObj.difficulty === 'green') {
        return {...mapObj, difficulty: 'Easy', rank: 1}
      } else if (mapObj.difficulty ==='greenBlue') {
        return {...mapObj, difficulty: 'Moderatly Easy', rank: 2}
      } else if (mapObj.difficulty ==='blue') {
        return {...mapObj, difficulty: 'Moderate', rank: 3}
      } else if (mapObj.difficulty ==='blueBlack') {
        return {...mapObj, difficulty: 'Moderately Hard ', rank: 4}
      } else if (mapObj.difficulty ==='black') {
        return {...mapObj, difficulty: 'Hard', rank: 5}
      } else {
        return mapObj
      }
    })
    let addedFetchedTrail = [...state.fetchedUserTrails, newTrailConvertedDiff[0]]
    localStorage.setItem('fetchedUserTrails', JSON.stringify(addedFetchedTrail))
    // map local storage goes here
    return {
      ...state,
      fetchedUserTrails: addedFetchedTrail,
      trailNumber: state.fetchedUserTrails[0]? state.fetchedUserTrails[0].id : newTrailConvertedDiff[0].id
    }

    case 'DELETE_FAVORITE':
    let remainingUserTrails = state.userTrails.filter(trail => {
      return trail.trail_number !== action.payload
    })
    let remainingFetchedTrails = state.fetchedUserTrails.filter(trail => {
      return trail.id !== action.payload
    })

    localStorage.setItem('userTrails', JSON.stringify(remainingUserTrails))
    localStorage.setItem('fetchedUserTrails', JSON.stringify(remainingFetchedTrails))
    // map local storage goes here
    return {
      ...state,
      userTrails: remainingUserTrails,
      fetchedUserTrails: remainingFetchedTrails,
      trailNumber: remainingFetchedTrails[0]? remainingFetchedTrails[0].id: null
    }

    case 'USER_TRAIL_MAP':
    // map local storage goes here
    return{...state, loading: false, trailNumber: action.payload}

    case 'USER_TRAIL_SORT':
    state.fetchedUserTrails.sort(function(a, b){
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

    case 'FETCH_ERROR':
    return {...state, loading: false, error: action.payload}

    case 'CLEAR_STATE':
    return {
      currentUser: '',
      loading: false,
      error: false,
      fetchedUserTrails: [],
      userTrails: [],
      trailNumber: null
    }

    default:
    return state;
  }
}
