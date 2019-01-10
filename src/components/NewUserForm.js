import React, {Component} from 'react';
import {connect} from 'react-redux'
import { createUser } from '../actions/users'

class NewUserForm extends Component {
  state = {
    createName: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      createName: ''
    })
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <h2>Enter a New Trail Name:</h2>
            </label>
            <input
              value={this.state.createName}
              onChange={(event)=>this.setState({
               createName: event.target.value
              })}
              type="text"
             />
           <button>Create!</button>
          </form>
      </div>

    );
  }
}

export default connect(null, {createUser})(NewUserForm)
