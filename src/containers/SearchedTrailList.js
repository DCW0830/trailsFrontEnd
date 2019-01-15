import React, {Component} from 'react';
import {connect} from 'react-redux'
import Trail from '../components/Trail'

class SearchedTrailList extends Component {
  state = {
    selectedTrails: []
  }

  handleClick = (event, trailId) => {
    if(event.target.checked) {
      this.setState({
        selectedTrails: [...this.state.selectedTrails, trailId]
      }, ()=>console.log(this.state.selectedTrails))
      console.log('hi')
    } else {
      this.setState({
        selectedTrails: this.state.selectedTrails.splice( this.state.selectedTrails.indexOf(trailId), 1 )
      }, ()=> console.log(this.state.selectedTrails))
    }
  }

  createTrail = () => {
    if (this.props.trails.trails) {
      return this.props.trails.trails.map(trailObj => {
        return <Trail
          handleClick={this.handleClick}
          key={trailObj.id}
          trail={trailObj}
        />
      })
    }
  }

  render() {
    const {trails} = this.props

    return (
      <form>
        <table className="trail-list" >
          <tbody>
            <tr>
              <th>Name</th>
              <th>Difficulty</th>
              <th>Length</th>
              <th>Location</th>
              <th>Stars</th>
              <th>Favorite</th>
            </tr>
            {this.createTrail()}
          </tbody>
        </table>
      </form>
    );
  }
}

const mapStateToProps = (state => {
  return ({
    trails: state.trailsReducers.trails,
  })
})

export default connect(mapStateToProps)(SearchedTrailList)
