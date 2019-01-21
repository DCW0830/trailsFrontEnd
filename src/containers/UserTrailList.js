import React, {Component} from 'react';
import UserTrail from './UserTrail'

class UserTrailList extends Component {
  userTrailId(trailObj, userTrails) {
    return userTrails.find(ut => ut.trail_number === trailObj.id)
  }
  createTrail = () => {
    if(this.props.userFetchedTrails) {
      return this.props.userFetchedTrails.map(trailObj => {
        return <UserTrail
          key={trailObj.id}
          trail={trailObj}
          userTrailId={this.userTrailId(trailObj, this.props.userTrails)}/>
      })
    }
  }

  render() {
    return (
      <form>
        <table className="trail-list" >
          <tbody>
            <tr>
              <th>Name</th>
              <th>Difficulty</th>
              <th>Length</th>
              <th>Location</th>
              <th>Remove</th>
            </tr>
            {this.createTrail()}
          </tbody>
        </table>
      </form>
    );
  }
}

export default UserTrailList
