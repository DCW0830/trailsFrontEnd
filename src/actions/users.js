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
        dispatch({type: 'LOG_IN', payload: user})
        if(user.trails[0]) {
          localStorage.setItem('userTrails', JSON.stringify(user.trails))
          let newArray = user.trails.map(trail => {
            return trail.trail_number
          })
          let newUnique = [...new Set(newArray)];
          let newString = newUnique.join(',')
          fetch(`${url.trailApiById}&ids=${newString}`)
          .then(res => res.json())
          .then(userTrails =>  {
            dispatch({type: 'FETCH_USER_TRAILS', payload: userTrails})
            history.push('/')
          })
          .catch(error => {
            dispatch({type: 'FETCH_ERROR', payload: error})
          })
        } else {
          history.push('/')
        }
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
    .then(newUserTrail =>  {
      if (newUserTrail.id) {
        dispatch({type: 'ADD_USER_TRAIL', payload: newUserTrail})
        fetch(`${url.trailApiById}&ids=${newUserTrail.trail_number}`)
        .then(res => res.json())
        .then(newTrailInfo =>  {
          dispatch({type: 'ADD_FETCHED_TRAIL', payload: newTrailInfo})
        })
        .catch(error => {
          dispatch({type: 'FETCH_ERROR', payload: error})
        })
      } else if (newUserTrail.errors) {
        dispatch({type: 'FETCH_ERROR', payload: newUserTrail.errors})
      }
    })
    .catch(error => {
      dispatch({type: 'FETCH_ERROR', payload: error})
    })
  }
}

export function deleteFavorite (trailId) {
  return (dispatch) => {
    fetch(`${url.editTrail}/${trailId}`, {method: 'DELETE'})
    .then(res => res.json())
    .then(trail =>  {
      if (trail.id) {
        dispatch({type: 'DELETE_FAVORITE', payload: trail.trail_number})
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
