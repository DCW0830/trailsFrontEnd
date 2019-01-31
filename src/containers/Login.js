import React, {Component} from 'react';
import {connect} from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logIn } from '../actions/users'
import {Input} from 'semantic-ui-react'
import '../assets/css/index.css'

class Login extends Component {
  state = {
    username: '',
    pw: '',
    click: false
  }

  pStyle = {
    fontSize: '15px',
    position: 'relative',
    left: '170px'
  };

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
    const { error } = this.props
    return (
      <div className='standard'>
        <h2>Sign In!</h2>
          <form onSubmit={this.handleSubmit}>
            <Input
              placeholder='Username'
              value={this.state.username}
              name='username'
              onChange={this.handleChange}
              type="text"
            />
            <Input
             action='Sign In!'
             placeholder='Password'
             value={this.state.pw}
             name='pw'
             onChange={this.handleChange}
             type={this.state.click? "text": 'Password'}
            />
          </form>

        {error ? <h2>{error}: Verify Your Username And Password!</h2>:null}
        <span>
          Click to Create Account!
          <Link to='/SignUp'> Sign Up</Link>
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

export default withRouter (connect(mapStateToProps, {logIn})(Login))
