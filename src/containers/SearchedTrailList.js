import React, {Component} from 'react';
import {connect} from 'react-redux'
import Trail from '../components/Trail'

class SearchedTrailList extends Component {
  state = {
    trailsCounter: 0
  }

  handleNext = (event) => {
    event.preventDefault()
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
          return <Trail key={trailObj.id} trail={trailObj}/>
        } else {
          return null
        }
      })
    }
  }

  render() {
    return (
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
    );
  }
}

const mapStateToProps = (state => {
  return ({
    trails: state.trailsReducers.trails,
    userTrails: state.usersReducers.userTrails
  })
})

export default connect(mapStateToProps)(SearchedTrailList)
