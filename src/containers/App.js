import React from 'react'
import Home from './Home'
import LogIn from './LogIn'
import SignUp from './SignUp'
import FindTrails from './FindTrails'
import history  from '../history'
import {  Router, Route, Redirect} from 'react-router-dom'

const App = () => {
  return (
    <Router history={history}>
      <React.Fragment>
        <Route exact path="/" render={ () => loggedIn() ? <Home/> : <Redirect to='/LogIn' /> }/>

        <Route path="/LogIn" component={()=> loggedIn() ? <Redirect to="/" /> : <LogIn/> }/>

        <Route path="/SignUp" component={()=> loggedIn() ? <Redirect to='/' /> : <SignUp/> }/>

        <Route path="/FindTrails" component={()=> loggedIn() ? <FindTrails/> : <Redirect to='/LogIn'/> }/>

        <Route path='/logOut' component={() => logOut()} />

      </React.Fragment>
    </Router>
  )
}

const loggedIn = () => !!sessionStorage['id']

const logOut = () => {
  if(sessionStorage['id']) sessionStorage.removeItem('id')
  return <Redirect to='/logIn' />
}

export default App
