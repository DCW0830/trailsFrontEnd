import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import UserTrailList from '../components/UserTrailList'
import UserTrailMap from '../components/UserTrailMap'
import {connect} from 'react-redux'
import {fetchUserTrails} from '../actions/trails'
import '../assets/css/index.css'
class Home extends Component {
  render() {
    const {fetchedUserTrails, userTrails, currentUser} = this.props
    console.log(fetchedUserTrails)
    return (
      <div>
        <div>
          <NavBar/>
        </div>

        <span id='BaseCamp'>Welcome to Base Camp: {currentUser}!</span>
        {fetchedUserTrails[0]?
          <UserTrailList userTrails={userTrails} userFetchedTrails={fetchedUserTrails}/>:
          <h2 className='standard'>You Currently Have No Favorite Trails. Go Find Some!</h2>
        }

        {fetchedUserTrails[0]? <UserTrailMap/> : null}
      </div>
    );
  }
}

const mapStateToProps = (state => {
  return({
    currentUser: state.usersReducers.currentUser,
    fetchedUserTrails: state.usersReducers.fetchedUserTrails,
    userTrails: state.usersReducers.userTrails
  })
})

export default connect(mapStateToProps, {fetchUserTrails})(Home)
