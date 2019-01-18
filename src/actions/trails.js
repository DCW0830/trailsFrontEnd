import url from '../urls'

export function getTrails(search) {
  return (dispatch) => {
    dispatch({type: 'LOADING_GEOCODE'})
    fetch(`${url.geocodeAPI}&address=${search}`)
    .then(res => res.json())
    .then(geocode =>  {
      dispatch({type: 'FETCH_GEOCODE', payload: geocode})

      let lat = geocode.results[0].geometry.location.lat
      let lng = geocode.results[0].geometry.location.lng
      const trailsAPI = `${url.trailAPI}&lat=${lat}&lon=${lng}`

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
  console.log('fetching trails')
  return (dispatch) => {
    if(string) {
      fetch(`${url.trailApiById}&ids=${string}`)
      .then(res => res.json())
      .then(userTrails =>  {
        dispatch({type: 'FETCH_USER_TRAILS', payload: userTrails})
        console.log(userTrails)
      })
      .catch(error => {
        dispatch({type: 'FETCH_ERROR', payload: error})
      })
    } else {
      return null
    }
  }
}

export function trailMap (trailNumber) {
  return (dispatch) => {
    dispatch({type: 'TRAIL_MAP', payload: trailNumber})
  }
}
