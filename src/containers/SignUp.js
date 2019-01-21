import React, {Component} from 'react';
import {connect} from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { createUser } from '../actions/users'

class SignUp extends Component {
  state = {
    username: '',
    pw: '',
    pwConfirmation: '',
    click: false
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
    const { error } = this.props
    return (
      <div>
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
             type={this.state.click? "text": 'Password'}
            />
            <span onClick={()=> this.setState({click: !this.state.click }) }>
              {this.state.click? ' Hide?' : ' Show?'}
            </span>
            <br/>
            <label>Password Confirmation:</label>
            <input
              value={this.state.pwConfirmation}
              name='pwConfirmation'
              onChange={this.handleChange} type={this.state.click? "text": 'Password'}
            />

            <br/>
            <button>Create Account!</button>
          </form>
        <br/>
        {error ? <h2>{error}: Try Again!</h2>:null}
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
    error: state.usersReducers.error
  })
})

export default withRouter (connect(mapStateToProps, {createUser})(SignUp))
