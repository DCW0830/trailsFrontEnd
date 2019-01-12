import React, {Component} from 'react';
import {connect} from 'react-redux'
import FindTrailsForm from './FindTrailsForm'
import NavBar from '../components/NavBar'

const link = {
  width: '1000px',
  padding: '12px',
  height: '1000px'
}

class FindTrails extends Component {

  render() {
    const { geocode, trails, error, loading } = this.props
    console.log(trails, geocode)
    return (

      <div>
        <NavBar />
        <FindTrailsForm />
        <h1>List of the Search Trails</h1>
        <iframe
          style={link}
          frameBorder="0"
          scrolling="yes"
          src="https://www.hikingproject.com/widget?v=7&map=4&type=trail&id=7017613&x=34.5086&y=-93.0684&z=12"
        />
        // "https://www.hikingproject.com/widget/map?favs=1&location=fixed&x=-10281348&y=4158786&z=9.1&h=400"

      </div>
    );
  }
}

const mapStateToProps = (state => {
  return ({
    geocode: state.trailsReducers.geocode,
    trails: state.trailsReducers.trails,
    error: state.trailsReducers.error,
    loading: state.trailsReducers.loading
  })
})

export default connect(mapStateToProps)(FindTrails)
