import url from '../urls'
import history from '../history'

export function logIn(userInput) {
  return (dispatch) => {
    fetch(url.logIn, {
      method: 'POST',
      body: JSON.stringify(
        {user: {
        username: userInput.username,
        password: userInput.pw,
        password_confirmation: userInput.pwConfirmation
      } }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(user =>  {
      if (user.id) {
        localStorage.setItem('id', user.id)
        localStorage.setItem('username', user.username)
        history.push('/')
        dispatch({type: 'LOG_IN', payload: user})
      } else if (user.errors) {
        dispatch({type: 'FETCH_ERROR', payload: user.errors})
      }
    })
    .catch(error => {
      dispatch({type: 'FETCH_ERROR', payload: error})
    })
  }
}

export function addFavorite (trailNumber) {
  return (dispatch) => {
    fetch(url.editTrail, {
      method: 'POST',
      body: JSON.stringify({
        user_id: localStorage.id,
        trail: {
          trail_number: trailNumber,
        }
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(trail =>  {
      if (trail.id) {
        dispatch({type: 'ADD_USER_TRAIL', payload: trail})
      } else if (trail.errors) {
        dispatch({type: 'FETCH_ERROR', payload: trail.errors})
      }
    })
    .catch(error => {
      dispatch({type: 'FETCH_ERROR', payload: error})
    })
  }
}

export function deleteFavorite (trailId) {
  return (dispatch) => {
    fetch(`${url.editTrail}/${trailId}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(trail =>  {
      console.log(trail)
      if (trail.id) {
        dispatch({type: 'DELETE_FAVORITE', payload: trail})
      } else if (trail.errors) {
        dispatch({type: 'FETCH_ERROR', payload: trail.errors})
      }
    })
    .catch(error => {
      dispatch({type: 'FETCH_ERROR', payload: error})
    })
  }
}

export function clearState() {
  return (dispatch) => {
    dispatch({type: 'CLEAR_STATE'})
  }
}
