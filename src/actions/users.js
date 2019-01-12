import url from '../urls'

export function logIn() {
  return (dispatch) => {
    fetch(url.logIn)
    .then(res => res.json())
    .then(user =>  {
      dispatch({type: 'LOG_IN', payload: user})
    })
    .catch(error => {
      dispatch({type: 'FETCH_ERROR', payload: error},
      console.log(error))
    })
  }
}

export function createUser() {
  return (dispatch) => {
    fetch(url.signUp)
    .then(res => res.json())
    .then(newUser =>  {
      dispatch({type: 'CREATE_USER', payload: newUser})
    })
    .catch(error => {
      dispatch({type: 'FETCH_ERROR', payload: error},
      console.log(error))
    })
  }
}
