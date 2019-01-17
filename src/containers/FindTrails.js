import React, {Component} from 'react';
import {connect} from 'react-redux'
import FindTrailsForm from './FindTrailsForm'
import SearchedTrailList from './SearchedTrailList'
import NavBar from '../components/NavBar'
import SelectedTrailMap from '../components/SelectedTrailMap'

class FindTrails extends Component {

  state = {
    trailsCounter: 0
  }

  render() {
    const { city, state, county, zipCode} =this.props.location
    const { error, loading, trails} = this.props

    return (
      <div>
        <div>
          <NavBar />
        </div>

        <div>
          <br/>
          {loading? <h2>Loading Trails...</h2>: <h2>Search For Trails!</h2>}
          {city? `Trail Results For: ${city.long_name}`: null}
          {state? ` ${state.long_name}`: null}
          {zipCode? ` ${zipCode.long_name}`: null}
          {county? ` ${county.long_name}`: null}
          {trails.trails? <h1>Showing:{this.state.trailsCounter + 20} of {trails.trails.length} Results</h1>: null}
        </div>

        <div>
          <FindTrailsForm />
          {error? <h2>Error: Did you Enter a Valid City, State or Zip Code?</h2>: null}
        </div>

        <div>
          {trails.trails? <SearchedTrailList /> : null}
        </div>
        <div>
          {trails.trails? <SelectedTrailMap/> : null}
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
  })
})

export default connect(mapStateToProps)(FindTrails)
