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
        localStorage.setItem('id', newUser.id)
        localStorage.setItem('username', newUser.username)
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
        localStorage.setItem('id', returningUser.id)
        localStorage.setItem('username', returningUser.username)
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
    fetch(`${url.deleteTrail}/${trailId}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(trail =>  {
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
