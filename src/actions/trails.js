import url from '../urls'

export function getTrails(search, radius) {
  return (dispatch) => {
    dispatch({type: 'LOADING_GEOCODE'})
    fetch(`${url.geocodeAPI}&address=${search}`)
    .then(res => res.json())
    .then(geocode =>  {
      dispatch({type: 'FETCH_GEOCODE', payload: geocode})

      let lat = geocode.results[0].geometry.location.lat
      let lng = geocode.results[0].geometry.location.lng
      const trailsAPI = `${url.trailAPI}&lat=${lat}&lon=${lng}&maxDistance=${radius}`

      dispatch({type: 'LOADING_TRAILS'})
      fetch(trailsAPI)
      .then(res => res.json())
      .then(trails => dispatch(
        {type: 'FETCH_TRAILS', payload: trails})
      )
    })
    .catch(error => {
      dispatch({type: 'FETCH_ERROR', payload: error})
    })
  }
}

export function fetchUserTrails(string) {
  return (dispatch) => {
    if(string) {
      fetch(`${url.trailApiById}&ids=${string}`)
      .then(res => res.json())
      .then(userTrails =>  {
        dispatch({type: 'FETCH_USER_TRAILS', payload: userTrails})
      })
      .catch(error => {
        dispatch({type: 'FETCH_ERROR', payload: error})
      })
    } else {
      return null
    }
  }
}

export function trailMap (trailNumber, trailId) {
  return (dispatch) => {
    if(trailId) {
      dispatch({type: 'USER_TRAIL_MAP', payload: trailNumber})
    } else {
      dispatch({type: 'TRAIL_MAP', payload: trailNumber})
    }
  }
}

export function trailSort (header, click, userList) {
  return dispatch => {
    if(userList) {
      dispatch({type: 'USER_TRAIL_SORT', payload: {header, click} })
    } else {
      dispatch({type: 'TRAIL_SORT', payload: {header, click} })
    }
  }
}
