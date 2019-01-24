import React, {Component} from 'react';
import {connect} from 'react-redux'
import FindTrailsForm from './FindTrailsForm'
import SearchedTrailList from './SearchedTrailList'
import NavBar from '../components/NavBar'
import SelectedTrailMap from '../components/SelectedTrailMap'
import '../assets/css/index.css'
class FindTrails extends Component {
  render() {
    const {error, trails} = this.props
    return (
      <div>
        <NavBar/>
        <FindTrailsForm />
        {error? <h2>{error}</h2>: null}
        {trails[0]? <SearchedTrailList /> : null}
        {trails[0]? <SelectedTrailMap/> : null}
      </div>
    );
  }
}
const mapStateToProps = (state => {
  return ({
    trails: state.trailsReducers.trails,
    error: state.trailsReducers.error
  })
})
export default connect(mapStateToProps)(FindTrails)
