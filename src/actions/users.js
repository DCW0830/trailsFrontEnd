import url from '../urls'
import history from '../history'

export function createUser(userInput) {
  return (dispatch) => {
    fetch(url.signUp, {
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
    .then(newUser =>  {
      if (newUser.id) {
        sessionStorage.setItem('id', newUser.id)
        history.push('/')
        dispatch({type: 'LOG_IN', payload: newUser})
      } else if (newUser.errors) {
        dispatch({type: 'FETCH_ERROR', payload: newUser.errors})
      }
    })
    .catch(error => {
      dispatch({type: 'FETCH_ERROR', payload: error})
    })
  }
}

export function logIn(userInput) {
  return (dispatch) => {
    fetch(url.logIn, {
      method: 'POST',
      body: JSON.stringify(
        {user: {
        username: userInput.username,
        password: userInput.pw
      } }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(returningUser =>  {
      if (returningUser.id) {
        sessionStorage.setItem('id', returningUser.id)
        history.push('/')
        dispatch({type: 'LOG_IN', payload: returningUser})
      } else if (returningUser.errors) {
        dispatch({type: 'FETCH_ERROR', payload: returningUser.errors})
      }
    })
    .catch(error => {
      dispatch({type: 'FETCH_ERROR', payload: error})
    })
  }
}

export function addFavorite (trailNumber) {
  return (dispatch) => {
    fetch(url.createTrail, {
      method: 'POST',
      body: JSON.stringify({
        user_id: sessionStorage.id,
        trail: {
          trail_number: trailNumber,
        }
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(trail =>  {
      console.log(trail)
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
  console.log(trailId)
  return (dispatch) => {
    fetch(`${url.deleteTrail}/${trailId}`, {
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
