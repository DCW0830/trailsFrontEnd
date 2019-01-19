
import React, {Component} from 'react';
import {connect} from 'react-redux'
import Trail from '../components/Trail'
import {addFavorite, deleteFavorite} from '../actions/users'
import {trailMap} from'../actions/trails'

class SearchedTrailList extends Component {
  state = {
    trailsCounter: 0
  }

  handleNext = (event) => {
    event.preventDefault()
    if(this.state.trailsCounter + 20 <= this.props.trails.trails.length)
    this.setState({
      trailsCounter: this.state.trailsCounter + 20
    })
  }

  handlePrevious = (event) => {
    event.preventDefault()
    if (this.state.trailsCounter !== 0) {
      this.setState({
        trailsCounter: this.state.trailsCounter - 20
      })
    }
  }

  createTrail = () => {
    if (this.props.trails.trails) {
      return this.props.trails.trails.map((trailObj, idx) => {

        if (idx >= this.state.trailsCounter && idx < this.state.trailsCounter + 20) {
          return <Trail
            addFavorite={this.props.addFavorite}
            deleteFavorite={this.props.deleteFavorite}
            trailMap={this.props.trailMap}
            key={trailObj.id}
            trail={trailObj}
            userTrails={this.props.userTrails}/>
        } else {
          return null
        }
      })
    }
  }

  render() {
    const { city, state, county, zipCode} =this.props.location
    const {trails} = this.props
    return (
      <div>
        <br/>
        {city? `Trail Results For: ${city.long_name}`: null}
        {state? ` ${state.long_name}`: null}
        {zipCode? ` ${zipCode.long_name}`: null}
        {county? ` ${county.long_name}`: null}
        {trails.trails? <h1>Showing:{this.state.trailsCounter + 20} of {trails.trails.length} Results</h1>: null}

        <form>
          <table className="trail-list" >
            <tbody>
              <tr>
                <th onClick={()=>console.log('hello')}>Name</th>
                <th>Difficulty</th>
                <th>Length</th>
                <th>Location</th>
                <th>Favorite</th>
              </tr>
              {this.createTrail()}
            </tbody>
          </table>
          <button onClick={this.handlePrevious}>Previous 20</button>
          <button onClick={this.handleNext}>Next 20</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state => {
  return ({
    trails: state.trailsReducers.trails,
    userTrails: state.usersReducers.userTrails,
    location: state.trailsReducers.location,

  })
})

export default connect(mapStateToProps, {addFavorite, deleteFavorite, trailMap})(SearchedTrailList)
