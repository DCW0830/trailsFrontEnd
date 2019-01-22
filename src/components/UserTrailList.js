import React, {Component} from 'react';
import {connect} from 'react-redux'
import UserTrail from '../containers/UserTrail'
import {trailSort} from'../actions/trails'
class UserTrailList extends Component {
  state = {
    click: false
  }

  handleClick = (event) => {
    this.setState({
      click: !this.state.click
    })
    this.props.trailSort(event.target.innerText, this.state.click, true)
  }

  createTrail = () => {
    if(this.props.userFetchedTrails) {
      return this.props.userFetchedTrails.map(trailObj => {
        return <UserTrail
          key={trailObj.id}
          trail={trailObj}
          userTrailId={this.props.userTrails.find(ut=> ut.trail_number === trailObj.id)}/>
      })
    }
  }
  render() {
    return (
      <form>
        <table className="trail-list" >
          <tbody>
            <tr>
              <th onClick={this.handleClick}>Name</th>
              <th onClick={this.handleClick}>Difficulty</th>
              <th onClick={this.handleClick}>Length</th>
              <th onClick={this.handleClick}>Location</th>
              <th>Remove</th>
            </tr>
            {this.createTrail()}
          </tbody>
        </table>
      </form>
    );
  }
}
export default connect(null, {trailSort})(UserTrailList)
