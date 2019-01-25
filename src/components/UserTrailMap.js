import React, {Component} from 'react';
import url from '../urls'
import {connect} from 'react-redux'
import '../assets/css/index.css'

class UserTrailMap extends Component  {
  render(){
    const { trailNumber } = this.props
    return (
      <div>
        <iframe id='userMap'
          title='userTrail'
          sandbox="allow-pointer-lock allow-same-origin allow-scripts"
          frameBorder="0"
          scrolling="no"
          src= {url.areaMap + trailNumber}
        />
      </div>
    )
  }
}

const mapStateToProps =(state => {
  return ({
    trailNumber: state.usersReducers.trailNumber
  })
})

export default connect(mapStateToProps)(UserTrailMap)
