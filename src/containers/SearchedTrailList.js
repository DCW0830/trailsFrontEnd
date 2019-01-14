import React, {Component} from 'react';
import {connect} from 'react-redux'
import Trail from '../components/Trail'

class SearchedTrailList extends Component {

  createTrail = () => {
    if (this.props.trails.trails) {
      return this.props.trails.trails.map(trailObj => {
        return <Trail key={trailObj.id} trail={trailObj} />
      })
    }  
  }

  render() {
    const {trails} = this.props
    console.log(trails)

    return (

      <table className="trail-list" >
      <tbody>
        <tr>
          <th>Name</th>
          <th>Difficulty</th>
          <th>Length</th>
          <th>Location</th>
          <th>Stars</th>
        </tr>
        {this.createTrail()}
      </tbody>
    </table>
    );
  }
}

const mapStateToProps = (state => {
  return ({
    trails: state.trailsReducers.trails,
  })
})

export default connect(mapStateToProps)(SearchedTrailList)
