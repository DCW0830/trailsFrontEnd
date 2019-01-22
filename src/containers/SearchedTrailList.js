import React, {Component} from 'react';
import {connect} from 'react-redux'
import Trail from '../components/Trail'
import {addFavorite, deleteFavorite} from '../actions/users'
import {trailMap, abcSort} from'../actions/trails'
const pa = 20

class SearchedTrailList extends Component {
  state = {
    trailsCounter: 0,
    pageTurn: 1
  }

  handleNext = (event) => {
    event.preventDefault()

    if(this.state.trailsCounter + pa <= this.props.trails.trails.length)
    this.setState({
      trailsCounter: this.state.trailsCounter + pa, pageTurn: this.state.pageTurn + 1
    })
  }

  handlePrevious = (event) => {
    event.preventDefault()
    if (this.state.trailsCounter !== 0) {
      this.setState({
        trailsCounter: this.state.trailsCounter - pa, pageTurn: this.state.pageTurn - 1
      })
    }
  }

  resultsCount = () => {
    let currentNumber
    let number = this.props.trails.trails.length / pa
    if (this.state.pageTurn <= number) {
      currentNumber = this.state.pageTurn * pa
    } else {
      currentNumber = number * pa
    }
    return currentNumber
  }

  createTrail = () => {
    if (this.props.trails.trails) {
      return this.props.trails.trails.map((trailObj, idx) => {

        if (idx >= this.state.trailsCounter && idx < this.state.trailsCounter + pa) {
          return <Trail
            addFavorite={this.props.addFavorite}
            deleteFavorite={this.props.deleteFavorite}
            trailMap={this.props.trailMap}
            userTrailId={this.props.userTrails.find(ut => ut.trail_number === trailObj.id)}
            key={trailObj.id}
            trail={trailObj}/>
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
        {trails.trails? <h1>Showing: {this.resultsCount()} of {trails.trails.length} Results</h1>: null}
        <form>
          <table className="trail-list" >
            <tbody>
              <tr>
                <th onClick={this.props.abcSort}>Name</th>
                <th>Difficulty</th>
                <th>Length</th>
                <th>Location</th>
                <th>Favorite</th>
              </tr>
              {this.createTrail()}
            </tbody>
          </table>
          <p>
            {trails.trails.length > pa? <button onClick={this.handlePrevious}>Previous Page</button>:null}
            {trails.trails.length > pa? <button onClick={this.handleNext}>Next Page</button>:null}
          </p>
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

export default connect(mapStateToProps, {abcSort, addFavorite, deleteFavorite, trailMap})(SearchedTrailList)
