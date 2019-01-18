import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import UserTrailList from './UserTrailList'
import SelectedTrailMap from '../components/SelectedTrailMap'
import {connect} from 'react-redux'
import {fetchUserTrails} from '../actions/trails'


class Home extends Component {

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userTrailsString !== this.props.userTrailsString) {
      this.props.fetchUserTrails(this.props.userTrailsString)
    }
  }

  render() {
    const { username } = this.props.currentUser
    const {userTrailsString, fetchedUserTrails} =this.props
    console.log(fetchedUserTrails)

    return (
      <div>
        <div>
          <NavBar />
        </div>
        <h1>Welcome to Base Camp: {username}!</h1>
        <div>
          {userTrailsString? <UserTrailList userTrails={fetchedUserTrails}/> : <h2>You Currently Have No Favorite Trails. Go Find Some!</h2>}
        </div>
        <div>
          {userTrailsString? <SelectedTrailMap/> : null}
        </div>
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
