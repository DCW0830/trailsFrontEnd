import React, {Component} from 'react';
import {connect} from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { createUser } from '../actions/users'
import {Input} from 'semantic-ui-react'
import '../assets/css/index.css'

class SignUp extends Component {
  state = {
    username: '',
    pw: '',
    pwConfirmation: '',
    click: false
  }

  pStyle = {
    fontSize: '15px',
    position: 'relative',
    left: '320px'
  };

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
      <div className='standard'>
        <h2>Create Account!</h2>
          <form onSubmit={this.handleSubmit}>
            <Input
              placeholder='Username'
              value={this.state.username}
              name='username'
              onChange={this.handleChange}
              type="text"
            />
            <Input
             placeholder='Password'
             value={this.state.pw}
             name='pw'
             onChange={this.handleChange}
             type={this.state.click? "text": 'Password'}
            />
            <Input
              action='Create Account!'
              value={this.state.pwConfirmation}
              placeholder='Password Confirmation'
              name='pwConfirmation'
              onChange={this.handleChange} type={this.state.click? "text": 'Password'}
            />
          </form>
          {error ? <h2>{error}: Try Again!</h2>:null}
          <span>
            Click to Sign In As Existing User!
            <Link to="/"> Log In</Link>
          </span>
          <span style={this.pStyle} onClick={()=> this.setState({click: !this.state.click }) }>
            {this.state.click? ' Hide?' : ' Show?'}
          </span>
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
