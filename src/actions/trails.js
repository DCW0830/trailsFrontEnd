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
      .then(trails => {
        if(trails.trails[0]) {
          dispatch({type: 'FETCH_TRAILS', payload: trails})
        } else {
          dispatch({type: 'FETCH_ERROR', payload: "Sorry, there are no trails within your search parameters!"})
        }
      })
    })
    .catch(error => {
      dispatch({type: 'FETCH_ERROR', payload: "Something went wrong! Check your entry and try again!"})
    })
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
