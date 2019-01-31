import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import UserTrailList from '../components/UserTrailList'
import UserTrailMap from '../components/UserTrailMap'
import {connect} from 'react-redux'
import {fetchUserTrails} from '../actions/trails'
import '../assets/css/index.css'

class Home extends Component {

  render() {
    const {userTrailsString, fetchedUserTrails, loading, userTrails, currentUser} = this.props
    console.log(currentUser)

    return (
      <div>
        <div>
          <NavBar/>
        </div>
        <span id='BaseCamp'>Welcome to Base Camp: {currentUser}!</span>
        {loading? this.props.fetchUserTrails(userTrailsString) : null}

        {userTrailsString? <UserTrailList userTrails={userTrails} userFetchedTrails={fetchedUserTrails}/> : <h2 className='standard'>You Currently Have No Favorite Trails. Go Find Some!</h2>}

        {userTrailsString? <UserTrailMap/> : null}
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
