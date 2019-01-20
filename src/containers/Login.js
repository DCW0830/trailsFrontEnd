import React, {Component} from 'react';
import {connect} from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logIn } from '../actions/users'

class Login extends Component {
  state = {
    username: '',
    pw: '',
    click: false
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
    const { error } = this.props

    return (
      <div>
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
             type={this.state.click? "text": 'Password'}
            />
            <span onClick={()=> this.setState({click: !this.state.click }) }>
              {this.state.click? ' Hide?' : ' Show?'}
            </span>
            <br/>
            <button>Sign In!</button>

          </form>
        <br/>
        {error ? <h2>{error}: Verify Your Username And Password!</h2>:null}
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
    error: state.usersReducers.error
  })
})

export default withRouter (connect(mapStateToProps, {logIn})(Login))
