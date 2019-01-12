import React from 'react'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import FindTrails from './FindTrails'
import { BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/FindTrails" component={FindTrails} />
      </React.Fragment>
    </Router>
  )
}

export default App
