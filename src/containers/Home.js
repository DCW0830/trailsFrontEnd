import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import UserTrailList from '../components/UserTrailList'
import UserTrailMap from '../components/UserTrailMap'
import {connect} from 'react-redux'
import {fetchUserTrails} from '../actions/trails'

class Home extends Component {

  render() {
    const { username } = this.props.currentUser
    const {userTrailsString, fetchedUserTrails, loading, userTrails} = this.props

    return (
      <div>
        <div>
          <NavBar />
        </div>
        <h1>Welcome to Base Camp: {username}!</h1>
        {loading? this.props.fetchUserTrails(userTrailsString) : null}
        <div>
          {userTrailsString? <UserTrailList userTrails={userTrails} userFetchedTrails={fetchedUserTrails}/> : <h2>You Currently Have No Favorite Trails. Go Find Some!</h2>}
        </div>
        <div>
          {userTrailsString? <UserTrailMap/> : null}
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state => {
  return({
    loading: state.usersReducers.loading,
    currentUser: state.usersReducers.currentUser,
    userTrailsString: state.usersReducers.userTrailsString,
    fetchedUserTrails: state.usersReducers.fetchedUserTrails,
    userTrails: state.usersReducers.userTrails
  })
})

export default connect(mapStateToProps, {fetchUserTrails})(Home)
