import React, {Component} from 'react'
import Home from './Home'
import LogIn from './LogIn'
import SignUp from './SignUp'
import FindTrails from './FindTrails'
import history  from '../history'
import {connect} from 'react-redux'
import {clearState} from '../actions/users'
import {  Router, Route, Redirect} from 'react-router-dom'

class App extends Component {

  logOut = () => {
    if(sessionStorage['id']) sessionStorage.removeItem('id')
    this.props.clearState()
    return <Redirect to='/LogIn' />
  }

  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Route exact path="/" render={ () => loggedIn() ? <Home/> : <Redirect to='/LogIn' /> }/>
          <Route path="/LogIn" component={()=> loggedIn() ? <Redirect to="/" /> : <LogIn/> }/>
          <Route path="/SignUp" component={()=> loggedIn() ? <Redirect to='/' /> : <SignUp/> }/>
          <Route path="/FindTrails" component={()=> loggedIn() ? <FindTrails/> : <Redirect to='/LogIn'/> }/>
          <Route path='/LogOut' component={() => this.logOut()} />

        </React.Fragment>
      </Router>
    )
  }
}

const loggedIn = () => !!sessionStorage['id']



export default connect (null, {clearState})(App)
