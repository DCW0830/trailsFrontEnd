import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import {connect} from 'react-redux'
class Home extends Component {



  render() {
    const { username } = this.props.currentUser

    return (
      <div>
        <NavBar />
        <h1>Welcome to Base Camp: {username}!</h1>
      </div>

    );
  }
}

const mapStateToProps = (state => {
  return({
    currentUser: state.usersReducers.currentUser
  })
})

export default connect(mapStateToProps) (Home)
