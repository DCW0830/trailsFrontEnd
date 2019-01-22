import React, {Component} from 'react';
import {connect} from 'react-redux'
import FindTrailsForm from './FindTrailsForm'
import SearchedTrailList from './SearchedTrailList'
import NavBar from '../components/NavBar'
import SelectedTrailMap from '../components/SelectedTrailMap'

class FindTrails extends Component {

  render() {
    const {error, trails, loading} = this.props

    return (
      <div>
        <div>
          <NavBar />
        </div>
        {loading? <h2>Loading Trails...</h2>: <h2>Search For Trails!</h2>}
        <div>
          <FindTrailsForm />
          {error? <h2>Error: Did you Enter a Valid City, State or Zip Code?</h2>: null}
        </div>
        <div>
          {trails[0]? <SearchedTrailList /> : null}
        </div>
        <div>
          {trails[0]? <SelectedTrailMap/> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state => {
  return ({
    trails: state.trailsReducers.trails,
    loading: state.trailsReducers.loading,
  })
})

export default connect(mapStateToProps)(FindTrails)
