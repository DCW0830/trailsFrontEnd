import React, {Component} from 'react';
import {connect} from 'react-redux'
import FindTrailsForm from './FindTrailsForm'
import SearchedTrailList from './SearchedTrailList'
import NavBar from '../components/NavBar'

const link = {
  width: '1000px',
  padding: '12px',
  height: '1000px'
}

class FindTrails extends Component {

  render() {
    const { city, state, county, zipCode} =this.props.location
    const { error, loading, trails} = this.props

    return (
      <div>
        <NavBar />
        {loading? <h2>Loading Trails...</h2>: <h2>Search For Trails!</h2>}
        {city? <h1>Trail Results For: {city.long_name}, {state.long_name}, {zipCode.long_name}, {county.long_name}</h1>: null}
        {trails.trails? <h1>Showing: {trails.trails.length} Results</h1>: null}

        <FindTrailsForm />
        {error? <h2>Error: Did you Enter a Valid City/State or Zip Code?</h2>: null}
        <div>
          <iframe/>
        </div>
        <div>
          <SearchedTrailList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state => {
  return ({
    location: state.trailsReducers.location,
    error: state.trailsReducers.error,
    loading: state.trailsReducers.loading,
    trails: state.trailsReducers.trails
  })
})

export default connect(mapStateToProps)(FindTrails)
