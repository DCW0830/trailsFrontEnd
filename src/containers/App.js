import React from 'react'
import Home from '../components/Home'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from '../components/Login'
import MyTrails from './MyTrails'
import FindTrails from './FindTrails'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={Login} />
        <Route exact path="/MyTrails" component={MyTrails} />
        <Route exact path="/FindTrails" component={FindTrails} />
      </React.Fragment>
    </Router>
  )
}

export default App
