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

export function addFavorite (trailId) {
  return (dispatch) => {
    dispatch({type: 'ADD_FAVORITE'})
  }
}

export function deleteFavorite (trailId) {
  return (dispatch) => {
    dispatch({type: 'DELETE_FAVORITE'})
  }
}

export function clearState() {
  return (dispatch) => {
    dispatch({type: 'CLEAR_STATE'})
  }
}
