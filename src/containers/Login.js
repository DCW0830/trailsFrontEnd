import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import {connect} from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logIn } from '../actions/users'

class Login extends Component {
  state = {
    username: '',
    pw: ''
  }

  handleChange = (event) => {
    this.setState (
      {[event.target.name]: event.target.value}
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.logIn(this.state)
    this.setState({
      username: '',
      pw: ''
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <h2>Sign In!</h2>
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
            <button>Sign In!</button>
          </form>
        <br/>
        <span>
          Click to Create Account!
        </span>
        <Link to='/SignUp'> Sign Up</Link>
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

export default withRouter (connect(mapStateToProps, {logIn})(Login))
