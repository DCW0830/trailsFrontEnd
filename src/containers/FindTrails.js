import React, {Component} from 'react';
import {connect} from 'react-redux'
import FindTrailsForm from './FindTrailsForm'
import SearchedTrailList from './SearchedTrailList'
import NavBar from '../components/NavBar'
import SelectedTrailMap from '../components/SelectedTrailMap'

class FindTrails extends Component {

  render() {
    const { city, state, county, zipCode} =this.props.location
    const { error, loading, trails, latLog} = this.props

    return (
      <div>
        <div>
          <NavBar />
        </div>

        <div>
          {loading? <h2>Loading Trails...</h2>: <h2>Search For Trails!</h2>}
          {city? <h1>Trail Results For: {city.long_name}, {state.long_name}, {zipCode.long_name}, {county.long_name}</h1>: null}
          {trails.trails? <h1>Showing: {trails.trails.length} Results</h1>: null}
        </div>

        <div>
          <FindTrailsForm />
          {error? <h2>Error: Did you Enter a Valid City/State or Zip Code?</h2>: null}
        </div>

        <div>
          <SearchedTrailList />
        </div>
        <div>
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
    trails: state.trailsReducers.trails,
    latLog: state.trailsReducers.latLog
  })
})

export default connect(mapStateToProps)(FindTrails)
