import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import {connect} from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { createUser } from '../actions/users'

class SignUp extends Component {
  state = {
    username: '',
    pw: '',
    pwConfirmation: ''
  }

  handleChange = (event) => {
    this.setState (
      {[event.target.name]: event.target.value}
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/api/v1/signup', {
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
          pwConfirmation: ''
        })
      }
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <h2>Create Account!</h2>
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
            <br/>
            <label>Password Confirmation:</label>
            <input
              value={this.state.pwConfirmation}
              name='pwConfirmation'
              onChange={this.handleChange} type="text"
            />
            <br/>
            <button>Create Account!</button>
          </form>
        <br/>
        <span>
          Click to Sign In As Existing User!
        </span>
        <Link to="/"> Login</Link>
      </div>
    );
  }
}

export default withRouter (connect(null, {createUser})(SignUp))
