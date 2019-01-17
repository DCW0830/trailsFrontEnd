import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import {connect} from 'react-redux'
import {fetchUserTrails} from '../actions/trails'

class Home extends Component {

  render() {
    const { username } = this.props.currentUser
    console.log(this.props.userTrailsString)

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
    currentUser: state.usersReducers.currentUser,
    userTrailsString: state.usersReducers.userTrailsString,
    fetchedUserTrails: state.usersReducers.fetchedUserTrails
  })
})


export default connect(mapStateToProps, {fetchUserTrails})(Home)
