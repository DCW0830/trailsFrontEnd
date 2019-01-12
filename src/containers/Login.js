import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import {connect} from 'react-redux'
import { getUser, createUser } from '../actions/users'
let api

class Login extends Component {

  state = {
    username: '',
    pw: '',
    pwConfirmation: '',
    click: false
  }

  apiChange = () => {
    if(this.state.click) {
      api = 'http://localhost:3000/api/v1/signup'
    }else{
      api = 'http://localhost:3000/api/v1/login'
    }
  }

  handleChange = (event) => {
    this.setState (
      {[event.target.name]: event.target.value}
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(api, {
      method: 'POST',
      body: JSON.stringify(
        {user: {
        username: this.state.username,
        password: this.state.pw,
        password_confirmation: this.state.pwConfirmation
      } }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => {
      console.log(response)
      if (response.errors) {
        window.alert(response.errors, 'Try Again!')
      }else if(response.id){
        this.setState({
          username: '',
          pw: '',
          pwConfirmation: '',
          click: false
        })
      }
    })
  }

  render() {
    this.apiChange()
    return (
      <div>
        <NavBar />

        {!this.state.click?<h2>Sign In!</h2>:<h2>Create Account!</h2>}

          <form onSubmit={this.handleSubmit}>
            <label>Username:</label>
            <input
              value={this.state.username}
              name='username'
              onChange={this.handleChange}
              type="text"
            />
            <br/>
            <label>Password:</label>
            <input
             value={this.state.pw}
             name='pw'
             onChange={this.handleChange}
             type="text"
            />
          {this.state.click? <label>Password Confirmation:</label>:null}
          {this.state.click? <input value={this.state.pwConfirmation} name='pwConfirmation' onChange={this.handleChange} type="text"/> : null}
            <br/>
            {!this.state.click?
              <button>Sign In!</button>:
              <button>Create Account!</button>
            }
          </form>
        <br/>
        <span onClick={ ()=> this.setState({
          username: '',
          pw: '',
          pwConfirmation: '',
          click: !this.state.click
        })}>
          {!this.state.click ?
            'Click to Create Account!':
            'Click to Sign In As Existing User!'
          }
        </span>
      </div>
    );
  }
}

export default connect(null, {getUser, createUser})(Login)
