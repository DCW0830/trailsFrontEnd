import React, {Component} from 'react';
import url from '../urls'
import {connect} from 'react-redux'
import '../assets/css/index.css'

class SelectedTrailMap extends Component  {
  render(){
    const { trailNumber } = this.props
    return (
      <div>
        <iframe className='selectedMap'
          title='selectedTrail'
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
    trailNumber: state.trailsReducers.trailNumber
  })
})

export default connect(mapStateToProps) (SelectedTrailMap)
