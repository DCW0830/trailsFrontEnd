import url from '../urls'

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
      console.log(returningUser)
      sessionStorage.setItem('id', returningUser.id)
      dispatch({type: 'LOG_IN', payload: returningUser})
    })
    .catch(error => {
      dispatch({type: 'FETCH_ERROR', payload: error})
      console.log(error)
    })
  }
}

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
      console.log(newUser)
      sessionStorage.setItem('id', newUser.id)
      dispatch({type: 'LOG_IN', payload: newUser})
    })
    .catch(error => {
      dispatch({type: 'FETCH_ERROR', payload: error})
      console.log(error)
    })
  }
}
