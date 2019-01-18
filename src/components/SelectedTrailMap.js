import React, {Component} from 'react';
import url from '../urls'
import {connect} from 'react-redux'

const link = {
  width: '600px',
  padding: '12px',
  height: '1000px'
}

class SelectedTrailMap extends Component  {
  render(){
    const { trailNumber } = this.props
    return (
      <div>
        <iframe
          title='selectedTrail'
          sandbox="allow-pointer-lock allow-same-origin allow-scripts"
          style= {link}
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
