
import React, {Component} from 'react';
import {connect} from 'react-redux'
import Trail from '../components/Trail'
import {addFavorite, deleteFavorite} from '../actions/users'
import {trailMap} from'../actions/trails'

class SearchedTrailList extends Component {
  state = {
    trailsCounter: 0,
    pageTurn: 1
  }

  handleNext = (event) => {
    event.preventDefault()

    if(this.state.trailsCounter + 20 <= this.props.trails.trails.length)
    this.setState({
      trailsCounter: this.state.trailsCounter + 20, pageTurn: this.state.pageTurn + 1
    })
  }

  handlePrevious = (event) => {
    event.preventDefault()
    if (this.state.trailsCounter !== 0) {
      this.setState({
        trailsCounter: this.state.trailsCounter - 20, pageTurn: this.state.pageTurn - 1
      })
    }
  }

  resultsCount = () => {
    let currentNumber
    let number = this.props.trails.trails.length / 20
    if (this.state.pageTurn <= number) {
      currentNumber = this.state.pageTurn * 20
    } else {
      currentNumber = number * 20
    }
    return currentNumber
  }

  userTrailId(trailObj, userTrails) {
    return userTrails.find(ut => ut.trail_number === trailObj.id)
  }

  createTrail = () => {
    if (this.props.trails.trails) {
      return this.props.trails.trails.map((trailObj, idx) => {

        if (idx >= this.state.trailsCounter && idx < this.state.trailsCounter + 20) {
          return <Trail
            addFavorite={this.props.addFavorite}
            deleteFavorite={this.props.deleteFavorite}
            trailMap={this.props.trailMap}
            userTrailId={this.userTrailId(trailObj, this.props.userTrails)}
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
                <th onClick={()=>console.log('hello')}>Name</th>
                <th>Difficulty</th>
                <th>Length</th>
                <th>Location</th>
                <th>Favorite</th>
              </tr>
              {this.createTrail()}
            </tbody>
          </table>
          <p>
            {trails.trails.length > 20? <button onClick={this.handlePrevious}>Previous Page</button>:null}
            {trails.trails.length > 20? <button onClick={this.handleNext}>Next Page</button>:null}
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

export default connect(mapStateToProps, {addFavorite, deleteFavorite, trailMap})(SearchedTrailList)
