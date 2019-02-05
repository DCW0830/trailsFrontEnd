import React, {Component} from 'react';
import url from '../urls'
import {connect} from 'react-redux'
import '../assets/css/index.css'

class UserTrailMap extends Component  {
  render(){
    const { userTrailNumber } = this.props
    return (
      <div>
        <iframe id='userMap'
          title='userTrail'
          frameBorder="0"
          scrolling="no"
          src= {url.areaMap + userTrailNumber}
        />
      </div>
    )
  }
}

const mapStateToProps =(state => {
  return ({
    userTrailNumber: state.usersReducers.userTrailNumber
  })
})

export default connect(mapStateToProps)(UserTrailMap)
