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
    this.props.createUser(this.state)
    this.setState({
      username: '',
      pw: '',
      pwConfirmation: ''
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
        <Link to="/"> Log In</Link>
      </div>
    );
  }
}
const mapStateToProps = (state => {
  return ({
    currentUser: state.usersReducers.currentUser,
    error: state.usersReducers.error
  })
})

export default withRouter (connect(mapStateToProps, {createUser})(SignUp))
