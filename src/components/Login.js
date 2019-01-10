import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import NewUserForm from './NewUserForm'
import {connect} from 'react-redux'
import { getUser } from '../actions/users'

class Login extends Component {
  state = {
    trailName: '',
    click: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      trailName: '',
      click: false
    })
  }

  render() {
    return (
      <div>
        <div>
          <NavBar />
          <form onSubmit={this.handleSubmit}>
            <label>
              <h2>Enter Trail Name:</h2>
            </label>
            <input
              value={this.state.trailName}
              onChange={(event)=>this.setState({
               trailName: event.target.value
              })}
              type="text"
             />
           <button>Login!</button>
          </form>
        </div>
        <span onClick={()=> this.setState({ click: !this.state.click})}>
          Click to Create Trail Name!
        </span>
        {this.state.click? <NewUserForm/> : null}
      </div>
    );
  }
}

export default connect(null, {getUser})(Login)
