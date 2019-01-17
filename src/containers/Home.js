import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import {connect} from 'react-redux'
import {fetchUserTrails} from '../actions/trails'
let newerData

class Home extends Component {
  // https://www.hikingproject.com/data/get-trails-by-id?ids=7001635,7002742,7000108,7002175,7005207&key=20

  convertData = () => {
    if(this.props.userTrails[0]) {
      let newData = this.props.userTrails.map(trail => {
        return trail.trail_number
      })
      newerData = newData.join(', ')
      return newerData
    } else {
      return null
    }
  }

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
    currentUser: state.usersReducers.currentUser,
    userTrails: state.usersReducers.userTrails
  })
})


export default connect(mapStateToProps, {fetchUserTrails})(Home)
